describe('The Sign Up Page - Profile Form', () => {
	beforeEach(() => {
		cy.fixture('user-profile-strava-connected-spec.json').then((json) => {
			cy.intercept('GET', '/user/profile', json);
		})
		// 	as('userProfileStravaConnected') // load data from users.json
		// cy.intercept('GET', '/user/profile', {fixture: 'user-profile-strava-connected-spec.json'});
		// cy.intercept('GET', '/user/profile', {
		// 	"statusCode": 200,
		// 	"body": {
		// 		"first_name": "Eric",
		// 		"last_name": "Daams",
		// 		"email": "",
		// 		"picture": "",
		// 		"strava_id": "abc123def456"
		// 	}
		// })
  	});

  it('displays standard heading', () => {
    cy.visit('http://localhost:3000');

    cy.get('.form-container')
      .get('h1')
      .contains('Calculate Your Emissions Savings');
  });

  it('shows form progress bar', () => {
    cy.get('.form-progress-bar')
      .get('li.form-progress-bar-item--active')
      .contains('Complete Profile');
  });
});
