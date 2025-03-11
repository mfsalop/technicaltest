const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',  
  reporterOptions: {
    reportDir: 'cypress/reports',  
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    projectId: 'r41ais',  // Ensure projectId is inside the e2e object
    setupNodeEvents(on, config) {
      // Initialize the mochawesome reporter plugin
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});