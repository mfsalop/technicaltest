const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'r41ais',
  e2e: {
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',  
      overwrite: false,              
      html: true,                    
      json: true,                    
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
