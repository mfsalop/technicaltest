class Login {
    // Base URL and Selectors
    baseUrl = 'https://www.saucedemo.com/';
    textUsername = '[data-test="username"]';   
    textPassword = '[data-test="password"]';   
    buttonLogin = '[data-test="login-button"]'; 
    textTitle = '[data-test="title"]';
    textError = '[data-test="error"]';
  
    // Visit the login page
    visit() {
      cy.visit(this.baseUrl); 
    }
  
    // Type username into the input field
    fillUsername(username) {
      cy.get(this.textUsername).type(username); 
    }
  
    // Type password into the input field
    fillPassword(password) {
      cy.get(this.textPassword).type(password);
    }
  
    // Click the login button
    clickLoginButton() {
      cy.get(this.buttonLogin).click();  
    }
    // Verify the title of the page
    verify = () => {
        cy.get(this.textTitle).should('have.text', 'Products');
    }
    //Verify Products Container
    verifyProductsContainer = () => {
        cy.get('.product_label').should('have.text', 'Products');
    }
    // Verify the error message for Locked Out User
    verifyLockedOutUserError = () => {
        cy.get(this.textLockedError).should('have.text', 'Epic sadface: Sorry, this user has been locked out.');
  
    }
    // Verify the error message for Incorrect Username
    verifyIncorrectCredentialsError = () => {
        cy.get(this.textError).should('have.text', 'Epic sadface: Username and password do not match any user in this service');
    }
}
  export default new Login();
  