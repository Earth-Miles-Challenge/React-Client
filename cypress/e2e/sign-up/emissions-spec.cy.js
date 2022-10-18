describe('The Sign Up Page - Emissions', () => {
    beforeEach(() => {
        cy.fixture('user-profile-strava-connected-spec.json')
            .then((json) => {
                const profileWithEmail = {
                    ...json,
                    email: 'eric@example.dev'
                }
                cy.intercept('GET', '/user/profile', profileWithEmail);
            })
            // .then(() => {
            //     cy.get('input[type=submit]')
            //       .click();
            // })
      });

    it('displays standard heading', () => {
        cy.visit('http://localhost:3000');

        cy.get('.form-container')
          .get('h1')
          .contains('Calculate Your Emissions Savings');
    });

    it('shows emissions ', () => {
        cy.get('.form-progress-bar')
          .get('li.form-progress-bar-item--active')
          .contains('Emissions Savings');
    });
});
