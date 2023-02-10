describe('Homepage', () => {
  it('successfully loads', () => {
    cy.visit('/');

    cy.get('.form-container')
      .get('h1')
      .contains('Calculate Your Emissions Savings');
  });

  it('shows Strava button with correct link', () => {
    cy.get('.strava-connect a')
      .should('have.attr', 'href')
      .and((href) => {
        Cypress.minimatch(href, 'https://www.strava.com/oauth/authorize?client_id=*response_type=code&redirect_uri=*&approval_prompt=auto&scope=profile:read_all,activity:read_all,activity:write&state=*')
      });

    cy.get('svg')
      .should('have.attr', 'aria-label', 'Strava Connect button');
  });
});