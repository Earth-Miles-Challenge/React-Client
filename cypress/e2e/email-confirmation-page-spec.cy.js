describe('Email Confirmation Page', function() {
  it('displays expected content', () => {
    cy.visit('/confirm-email');
    cy.get('h1')
      .contains('Confirm your email address');
    cy.get('h1 + p')
      .contains('Click on the link in your email to confirm you address.');
    cy.get('main button')
      .contains('Resend your confirmation email.');
  });
});
