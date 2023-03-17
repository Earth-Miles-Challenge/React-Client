describe('Platform Connection Page', function() {
  it('displays expected content when the user is authenticated', () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZXhwIjoyNTI0NjA3OTk5fQ.0owJNR4zt4q85hgbma0uhMtVa9lLM3vo0cVQWE3SXpA';
    cy.setCookie('token', token);
    cy.intercept({ method: 'GET', url: '**/users/*' }, {fixture: 'user-profile-strava-unconnected.json'})

    cy.visit('/connect');
    cy.get('h1')
      .contains('Connect your platform');
    cy.get('h1 + p')
      .contains('Connect your Strava account to start tracking the emissions savings of your runs, rides, or walks.');

    // Platforms list
    cy.get('ul.platform li')
      .should('have.length', 1);

    // Strava button
    cy.get('ul.platform li:first-of-type')
      .get('.strava-connect a')
      .should('have.attr', 'href')
      .and((href) => {
        Cypress.minimatch(href, 'https://www.strava.com/oauth/authorize?client_id=*response_type=code&redirect_uri=*&approval_prompt=auto&scope=profile:read_all,activity:read_all,activity:write&state=*')
      });
    cy.get('.strava-connect svg')
      .should('have.attr', 'aria-label', 'Strava Connect button');
  });

  it('displays link to login when the user is not authenticated', () => {
    cy.visit('/connect');
    cy.get('h1')
      .contains('Please login');
    cy.get('h1 + p')
      .contains('Access to this page requires logging in.');
  });
});
