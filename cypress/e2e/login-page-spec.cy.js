describe('Login page', () => {
	it('displays Strava connect button and login form', () => {
	  cy.visit('/login');

	  cy.get('.banner-container h1')
      .contains('Get started');
    cy.get('.banner-container h1 + p')
      .contains('Log in to your existing account below.');

    cy.get('.login-container')
      .contains('h2', 'Log in');
    cy.get('.login-container h2 + p a')
      .should('have.attr', 'href')
      .and((href) => {
        Cypress.minimatch(href, '*/register')
      });
    cy.get('.login-container')
      .contains('.form-field', 'Email')
      .get('input[name=email]');
    cy.get('.login-container')
      .contains('.form-field', 'Password')
      .get('input[name=password]');
  });
});