describe('Platform Connection Page', function() {
  it('displays expected content', () => {
    cy.visit('/connect');
    cy.get('h1')
      .contains('Connect Strava');
    cy.get('h1 + p')
      .contains('Connect your Strava account to start tracking the emissions savings of your runs, rides, or walks.');

    // Strava button
    cy.get('.strava-connect a')
      .should('have.attr', 'href')
      .and((href) => {
        Cypress.minimatch(href, 'https://www.strava.com/oauth/authorize?client_id=*response_type=code&redirect_uri=*&approval_prompt=auto&scope=profile:read_all,activity:read_all,activity:write&state=*')
      });
    cy.get('.strava-connect svg')
      .should('have.attr', 'aria-label', 'Strava Connect button');
  });
});
