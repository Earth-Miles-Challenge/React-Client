import profileData from '../fixtures/user-profile-strava-connected-no-email.json';

beforeEach(function() {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZXhwIjoyNTI0NjA3OTk5fQ.0owJNR4zt4q85hgbma0uhMtVa9lLM3vo0cVQWE3SXpA';
  cy.setCookie('token', token);
  cy.intercept({ method: 'GET', url: '**/users/*' }, {fixture: 'user-profile-strava-connected-no-email.json'})
  cy.intercept({ method: 'PUT', url: '**/users/*' }, {fixture: 'user-profile-strava-connected.json'})
  cy.visit('/registration');
});

describe('Registration Page', function() {
  it('displays form', () => {
    cy.get('.form-container')
      .contains('h1', 'Finish registration');
    cy.get('input#firstName')
      .should('have.value', '');
    cy.get('input[name=lastName]')
      .should('have.value', '');
    cy.get('input[name=email]')
      .should('have.value', profileData.email);
    cy.get('input[name=password]')
      .should('have.value', '');

    // Test submission behaviour
    cy.get('input[name=email]')
      .clear();
    cy.get('input[type=submit]')
      .click();

    cy.get('.form-container')
      .contains('h1', 'Finish registration');

    cy.get('.registration-form-container')
      .contains('Please provide your first name.')
    cy.get('.registration-form-container')
      .contains('Please provide your last name.')
    cy.get('.registration-form-container')
      .contains('Please provide your email address.');
    cy.get('.registration-form-container')
      .contains('Please set a password.');

    // shows appropriate error message for invalid email address
    cy.get('input[name=email]')
      .clear()
      .type('invali@excom');

    cy.get('input[type=submit]')
      .click();

    cy.get('.registration-form-container')
      .contains('Please provide a valid email address.');
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
