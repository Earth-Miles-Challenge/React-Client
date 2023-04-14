beforeEach(function() {
  cy.visit('/register');
});

describe('Registration Page', function() {
  it('displays form', () => {
    cy.get('.banner-container h1')
      .contains('Get started');
    cy.get('.banner-container h1 + p')
      .contains('Set up your account to receive notifications whenever you run, ride or walk a commute.');

    cy.get('.form-container h2')
      .contains('Register');
    cy.get('input#firstName')
      .should('have.value', '');
    cy.get('input[name=lastName]')
      .should('have.value', '');
    cy.get('input[name=email]')
      .should('have.value', '');
    cy.get('input[name=password]')
      .should('have.value', '');
    cy.get('input[name=passwordRepeat]')
      .should('have.value', '');
    cy.get('.form-container a')
      .contains('Log in instead.')
      .should('have.attr', 'href', '/login');

    // Test submission behaviour
    cy.get('input[name=email]')
      .clear();
    cy.get('input[type=submit]')
      .click();

    cy.get('.registration-container')
      .contains('Please provide your first name.')
    cy.get('.registration-container')
      .contains('Please provide your last name.')
    cy.get('.registration-container')
      .contains('Please provide your email address.');
    cy.get('.registration-container')
      .contains('Please set a password.');

    // shows appropriate error message for invalid email address
    cy.get('input[name=email]')
      .clear()
      .type('invali@excom');
    cy.get('input[type=submit]')
      .click();
    cy.get('.registration-container')
      .contains('Please provide a valid email address.');

    // shows appropriate error message for mismatched password
    cy.get('input[name=password')
      .type('password');
    cy.get('input[name=passwordRepeat]')
      .type('differentpassword');
    cy.get('.registration-container')
      .contains('The password does not match');
  });

  it('page progresses on form submission with enter keystroke', () => {
    cy.get('input[name=email]')
      .type('eric@example.dev{enter}')
  });

  it('page progresses on form submission with submit button click', () => {
    cy.get('input[name=email]')
      .type('eric@example.dev');

    cy.get('input[type=submit]')
      .click();
  });
});
