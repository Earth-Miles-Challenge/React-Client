describe('The Sign Up Page - Profile Form', function() {
    beforeEach(function () {
      cy.intercept('GET', '**/users/*/activities', {fixture: 'user-activities.json'});
      cy.intercept('GET', '**/users/*/impact/emissionsAvoided', {fixture: 'user-impact-emissions-avoided.json'});

      cy.fixture('user-profile-strava-connected.json').as('profile_data').then(function(payload) {
        cy.visit('http://localhost:3000');
        cy.window().its('store').invoke('dispatch', { type: 'authorization/setAuthenticated', payload });
      });
    });

    it('displays standard heading', () => {
        cy.get('.form-container')
          .get('h1')
          .contains('Calculate Your Emissions Savings');
    });

    it('shows form progress bar', () => {
        cy.get('.form-progress-bar')
          .get('li.form-progress-bar-item--active')
          .contains('Complete Profile');
    });

    it('contains first name, last name and email fields', function() {
        cy.get('input#firstName')
          .should('have.value', this.profile_data.first_name);
        cy.get('input[name=lastName]')
          .should('have.value', this.profile_data.last_name);
        cy.get('input[name=email]')
          .should('have.value', this.profile_data.email);
    });

    it('progress to next step if all fields are filled out (enter submit)', () => {
        cy.get('input[name=email]')
          .type('eric@example.dev{enter}')
    });

    it('progress to next step if all fields are filled out (click submit)', () => {
        cy.get('input[name=email]')
          .type('eric@example.dev');

        cy.get('input[type=submit]')
          .click();
    });

    it('does not progress to next step with unfilled fields', () => {
        // Click submit without filling out email field.
        cy.get('input[type=submit]')
          .click();

        cy.get('.form-progress-bar')
          .get('li.form-progress-bar-item--active')
          .contains('Complete Profile');
    });

    it('shows appropriate error message for unfilled fields', () => {
        cy.get('input[name=firstName]')
          .clear();
        cy.get('input[name=lastName]')
          .clear();
        cy.get('input[name=email]')
          .clear();

        cy.get('input[type=submit]')
          .click();

        cy.get('.profile-form-wrapper')
          .contains('Please provide your first name.')
        cy.get('.profile-form-wrapper')
          .contains('Please provide your last name.')
        cy.get('.profile-form-wrapper')
          .contains('Please provide your email address.');
    });

    it('shows appropriate error message for invalid email address', () => {
        cy.get('input[name=email]')
          .clear()
          .type('invali@excom');

        cy.get('input[type=submit]')
          .click();

        cy.get('.profile-form-wrapper')
          .contains('Please provide a valid email address.');
    });
});
