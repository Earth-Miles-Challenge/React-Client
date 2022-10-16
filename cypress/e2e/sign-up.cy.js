const _ = Cypress._;
const url = require('url');

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

  Cypress.Commands.add('loginBySingleSignOn', (overrides = {}) => {
    Cypress.log({
      name: 'loginBySingleSignOn',
    })

    const options = {
      method: 'POST',
      url: 'https://www.strava.com/oauth/authorize',
      qs: {
        // use qs to set query string to the url that creates
        // http://auth.corp.com:8080?redirectTo=http://localhost:7074/set_token
        client_id: 93532,
        response_type: 'code',
        redirect_uri: 'http://localhost:9000/auth/strava',
        approval_prompt: 'auto',
        scope: 'profile:read_all,activity:read_all,activity:write',
        state: 'http://localhost:3000/'
      },
      form: true, // we are submitting a regular form body
      body: {
        username: 'jane.lane',
        password: 'password123',
      },
    }

    // allow us to override defaults with passed in overrides
    _.extend(options, overrides)

    cy.request(options)
  })

  it('clicking button returns to second step of form', () => {
    cy.get('.strava-connect a')
      .click();
  });
})