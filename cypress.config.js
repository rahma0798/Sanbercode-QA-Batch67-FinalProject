const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    video: false,
    reporter: 'cypress-mochawesome-reporter',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
