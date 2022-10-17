// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//


// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('stravaConnect', (overrides = {}) => {
    Cypress.log({
      name: 'stravaConnect',
    });

    const options = {
      method: 'POST',
      url: 'https://www.strava.com/oauth/authorize',
      qs: {
        client_id: 93532,
        response_type: 'code',
        redirect_uri: 'http://localhost:9000/auth/strava',
        approval_prompt: 'auto',
        scope: 'profile:read_all,activity:read_all,activity:write',
        state: 'http://localhost:3000/'
      },
      form: true, // we are submitting a regular form body
      body: {
        username: process.env.STRAVA_LOGIN_USERNAME,
        password: process.env.STRAVA_LOGIN_PASSWORD,
      },
    }

    // allow us to override defaults with passed in overrides
    _.extend(options, overrides)

    cy.request(options)
  });
