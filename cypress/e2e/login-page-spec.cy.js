describe('Login page', () => {
	it('displays Strava connect button and login form', () => {
	  cy.visit('/login');

	  cy.get('.form-container h1')
      .contains('Get Started');

    cy.get('.login-container h2')
      .contains('Log in');

    cy.get('.login-container p:first-of-type')
      .contains('If you have connected your account previously, sign in below.')

    cy.get('.login-container')
      .contains('.form-field', 'Email')
      .get('input[name=email]');

    cy.get('.login-container')
      .contains('.form-field', 'Password')
      .get('input[name=password]');

    cy.get('.login-container a')
      .contains('Not a member yet? Sign up now.')
      .should('have.attr', 'href', '/register');
  });
});