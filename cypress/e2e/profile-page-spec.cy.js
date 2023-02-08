import profileData from '../fixtures/user-profile-strava-connected-no-email.json';

beforeEach(function() {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZXhwIjoyNTI0NjA3OTk5fQ.0owJNR4zt4q85hgbma0uhMtVa9lLM3vo0cVQWE3SXpA';
  cy.setCookie('token', token);
  cy.intercept({ method: 'GET', url: '**/users/*' }, {fixture: 'user-profile-strava-connected-no-email.json'})
  cy.intercept({ method: 'PUT', url: '**/users/*' }, {fixture: 'user-profile-strava-connected.json'})
  cy.intercept({ method: 'GET', url: '**/users/*/activities' }, {fixture: 'user-activities.json'});
  cy.intercept({ method: 'GET', url: '**/users/*/impact/emissionsAvoided' }, {fixture: 'user-impact-emissions-avoided.json'});
  cy.visit('http://localhost');
});

describe('Sign Up - Profile Page', function() {
  it('displays expected header and form', () => {
    cy.get('.form-container')
      .get('h1')
      .contains('Create your profile');
    cy.get('input#firstName')
      .should('have.value', profileData.first_name);
    cy.get('input[name=lastName]')
      .should('have.value', profileData.last_name);
    cy.get('input[name=email]')
      .should('have.value', profileData.email);
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

  it('page does not progress to next step with unfilled fields and shows appropriate error messages', () => {
    cy.get('input[name=firstName]')
      .clear();
    cy.get('input[name=lastName]')
      .clear();
    cy.get('input[name=email]')
      .clear();

    cy.get('input[type=submit]')
      .click();

    cy.get('h1')
      .contains('Create your profile');

    cy.get('.profile-form-wrapper')
      .contains('Please provide your first name.')
    cy.get('.profile-form-wrapper')
      .contains('Please provide your last name.')
    cy.get('.profile-form-wrapper')
      .contains('Please provide your email address.');

    // shows appropriate error message for invalid email address
    cy.get('input[name=email]')
      .clear()
      .type('invali@excom');

    cy.get('input[type=submit]')
      .click();

    cy.get('.profile-form-wrapper')
      .contains('Please provide a valid email address.');
  });
});
