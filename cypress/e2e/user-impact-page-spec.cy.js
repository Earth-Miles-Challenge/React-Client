beforeEach(function() {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZXhwIjoyNTI0NjA3OTk5fQ.0owJNR4zt4q85hgbma0uhMtVa9lLM3vo0cVQWE3SXpA';
  cy.setCookie('token', token);
  cy.intercept({ method: 'GET', url: '**/users/*' }, {fixture: 'user-profile-strava-connected.json'})
  cy.intercept({ method: 'GET', url: '**/users/*/activities' }, {fixture: 'user-activities.json'});
  cy.intercept({ method: 'GET', url: '**/users/*/impact/emissionsAvoided' }, {fixture: 'user-impact-emissions-avoided.json'});
  cy.visit('/')
});

describe('The Sign Up Page - Emissions', () => {
  it('displays expected header, emissions summary & activities', () => {
    cy.get('.form-container')
      .get('h1')
      .contains('Your impact');

    cy.get('.emissions-savings-summary')
      .contains('Your human-powered commutes have helped you avoid approximately')
      .contains('span.total-savings', '2.3kg CO2e savings');

    cy.get('.emissions-savings-by-activity')
      .contains('h2', 'Savings by activity');

    // First activity
    cy.get('.activity-list .activity:nth-child(1) h4').contains('Ride home via shop')
    cy.get('.activity-list .activity:nth-child(1) .activity-distance').contains('3.29km');
    cy.get('.activity-list .activity:nth-child(1) .activity-date').contains('March 4, 2022')
    cy.get('.activity-list .activity:nth-child(1) .activity-impact').contains('0.563kg CO2e');

    // Second activity
    cy.get('.activity-list .activity:nth-child(2) h4').contains('Ride to work')
    cy.get('.activity-list .activity:nth-child(2) .activity-distance').contains('2.48km');
    cy.get('.activity-list .activity:nth-child(2) .activity-date').contains('March 1, 2022')
    cy.get('.activity-list .activity:nth-child(2) .activity-impact').contains('0.425kg CO2e');

    // Test for toggle
    cy.contains('.emissions-savings-by-activity button.toggle', 'Include non-commute activities')
      .click();
    cy.contains('.emissions-savings-by-activity button.toggle', 'Only show commute activities');

    // Non-commute activity
    cy.get('.activity-list .activity:nth-child(2) h4').contains('Evening Run')
    cy.get('.activity-list .activity:nth-child(2) .activity-distance').contains('5.33km');
    cy.get('.activity-list .activity:nth-child(2) .activity-date').contains('March 3, 2022')
    cy.get('.activity-list .activity:nth-child(2) .activity-impact').contains('-');
  });
});
