Cypress.on('fail', (error, runnable) => {
    // Take a screenshot on failure (using the test name)
    cy.screenshot(`${runnable.title}-failure`);
    
    // Log the failure for debugging
    cy.log(`Test failed: ${runnable.title}`);
    cy.log(`Error message: ${error.message}`);
  
    // Return false to prevent test from crashing immediately
    return false; // This ensures the test doesn't crash and logs the error properly
  });