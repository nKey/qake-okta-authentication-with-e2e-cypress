const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: false,
  e2e: {
    env: {
      okta_domain: "https://dev-70508583.okta.com/oauth2/default",
      okta_client_id: "0oa8fz1kxxsBaz4qr5d7",
      okta_redirect_uri: "http://localhost:3000/login/callback",
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
