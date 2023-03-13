describe('Homepage', () => {
  it('displays expected content', () => {
    cy.visit('/');

    cy.get('.header nav')
      .contains('Login')
      .should('have.attr', 'href', '/login');

    cy.get('.form-container h1')
      .contains('Calculate Your Emissions Savings');

    cy.get('.form-container .button')
      .contains('Get Started')
      .should('have.attr', 'href', '/register');

    cy.get('.commutes-intro h2')
      .contains('How it works');
  });
});