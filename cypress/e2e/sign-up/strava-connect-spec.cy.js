describe('The Sign Up Page - Strava Connect', () => {
	it('successfully loads', () => {
	  cy.visit('http://localhost');

	  cy.get('.form-container')
		.get('h1')
		.contains('Calculate Your Emissions Savings');
	});

	it('shows form progress bar', () => {
	  cy.get('.form-progress-bar')
		.get('li.form-progress-bar-item--active')
		.contains('Connect Strava');
	});

	it('shows Strava button with correct link', () => {
		cy.get('.strava-connect a')
			.should('have.attr', 'href', 'https://www.strava.com/oauth/authorize?client_id=93532&response_type=code&redirect_uri=http://localhost&approval_prompt=auto&scope=profile:read_all,activity:read_all,activity:write&state=http://localhost/')
			.get('svg')
			.should('have.attr', 'aria-label', 'Strava Connect button');
	});
  });