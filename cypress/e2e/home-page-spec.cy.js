describe('Homepage', () => {
  it('displays expected content', () => {
    cy.visit('/');

    cy.get('.form-container h1')
      .contains('Calculate Your Emissions Savings');

    cy.get('.form-container .button')
      .contains('Get Started')
      .should('have.attr', 'href', '/login');

    cy.get('.commutes-intro h2')
      .contains('How it works');
  });
});