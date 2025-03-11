const { defineConfig } = require("cypress");
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}` // 
});

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
    screenshotOnRunFailure: true,  
    video: true,                   
    videoCompression: 32,          
    videoUploadOnPasses: false,
    projectId: 'r41ais',  
    baseUrl: process.env.BASE_URL, 
    env: {
      apiUrl: process.env.API_URL, 
    },
    setupNodeEvents(on, config) {
      // Initialize the mochawesome reporter plugin
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});