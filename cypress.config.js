const { defineConfig } = require("cypress");

module.exports = defineConfig({
  hosts: {
    'www.strava.com': '127.0.0.1',
  },
  fixturesFolder: "cypress/fixtures",
  e2e: {
    baseUrl: 'http://localhost:3000',
  },
});
