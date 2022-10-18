describe('The Sign Up Page - Profile Form', function() {

    beforeEach(function () {
        cy.fixture('user-profile-strava-connected-spec.json').as('profile_data').then(function(profileJson) {
            cy.intercept('GET', '/user/profile', profileJson);
            cy.visit('http://localhost:3000');
        })
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
        cy.get('input#first-name')
          .should('have.value', this.profile_data.first_name);
        cy.get('input[name=last-name]')
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
        cy.get('input[name=first-name]')
          .clear();
        cy.get('input[name=last-name]')
          .clear();
        cy.get('input[name=email]')
          .clear();
        cy.get('input[type=submit]')
          .click();

        cy.get('.profile-form-wrapper')
          .contains('First name field should not be empty')
          .contains('Last name field should not be empty')
          .contains('Email address field should not be empty');
    });
});
