describe('The Sign Up Page - Emissions', () => {
    before(() => {
        cy.fixture('user-profile-strava-connected-spec.json')
            .then((json) => {
                const profileWithEmail = {
                    ...json,
                    email: 'eric@example.dev'
                }
                cy.intercept('GET', '/user/profile', profileWithEmail);
            });

        cy.visit('http://localhost:3000');
        cy.get('input[type=submit]')
            .click();
    });

    it('displays standard heading', () => {
        cy.get('.form-container')
          .get('h1')
          .contains('Calculate Your Emissions Savings');
    });

    it('"Emissions Savings" is the active proress bar item', () => {
        cy.get('.form-progress-bar')
          .get('li.form-progress-bar-item--active')
          .contains('Emissions Savings');
    });

    it('shows a summary of the total emissisions saved', () => {
        cy.get('.emissions-savings-summary')
          .contains('Your human-powered commutes have helped you avoid approximately')
          .contains('span.total-savings', '2.3kg CO2e savings');
    });

    it('shows an activity table with per-activity details', () => {
        cy.get('.emissions-savings-by-activity')
          .contains('h2', 'Savings by activity');

        cy.get('.emissions-savings-by-activity')
          .contains('a.toggle-all', 'Show non-commute activities');

        cy.get('table.activity-table')
          .contains('thead th:nth-child(1)', 'Activity')
          .contains('thead th:nth-child(2)', 'Distance')
          .contains('thead th:nth-child(3)', 'Date')
          .contains('thead th:nth-child(4)', 'Emissions Avoided');
    });

    it('shows two activities with expected details', () => {
        // First activity
        cy.get('table.activity-table tbody')
          .contains('tr:nth-child(1) td:nth-child(1)', 'Ride home via shop')
          .contains('tr:nth-child(1) td:nth-child(2)', '3.29km')
          .contains('tr:nth-child(1) td:nth-child(3)', 'March 4, 2022')
          .contains('tr:nth-child(1) td:nth-child(4)', '0.563kg CO2e');

        // Second activity
        cy.get('table.activity-table tbody')
          .contains('tr:nth-child(2) td:nth-child(1)', 'Ride to work')
          .contains('tr:nth-child(2) td:nth-child(2)', '2.48km')
          .contains('tr:nth-child(2) td:nth-child(3)', 'March 1, 2022')
          .contains('tr:nth-child(2) td:nth-child(4)', '0.425kg CO2e');
    });
});
