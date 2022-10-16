describe('The Sign Up Page', () => {
  it('successfully loads', () => {
    cy.visit('http://localhost:3000');

    cy.get('.form-container')
      .get('h1')
      .contains('Calculate Your Emissions Savings');
  });

  it('shows form progress bar', () => {
    cy.get('.form-progress-bar')
      .get('li.form-progress-bar-item--active')
      .contains('Connect Strava');
  });

  it('clicking button returns to second step of form', () => {
    cy.get('.strava-connect a')
      .click();
  });
})