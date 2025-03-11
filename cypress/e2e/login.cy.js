import Login from '../pageObject/loginPage';

describe('Users Logs in', () => {
  it('Standard User Logs in', () => {
    cy.fixture('credentials').then((credentials) => {
      const user1 = credentials.user1;

      // Visiting the page 
      Login.visit();
      // Entering the username and password
      Login.fillUsername(user1.username);
      Login.fillPassword(user1.password);
      // Clicking the login button
      Login.clickLoginButton();
      // Verifying the login
      Login.verify();
      cy.log('User has logged in');
    });
  });
  it('Locked Out User Logs in', () => {
    cy.fixture('credentials').then((credentials) => {
      const user2 = credentials.user2;

      // Visiting the page
      Login.visit();
      // Entering the username and password
      Login.fillUsername(user2.username);
      Login.fillPassword(user2.password);
      // Clicking the login button
      Login.clickLoginButton();
      // Verifying Error Message Locked Out User
      Login.verifyLockedOutUserError();
      cy.log('User has not logged in');
    });
  });
  it('Problem User Logs in', () => {
    cy.fixture('credentials').then((credentials) => {
      const user3 = credentials.user3;

      // Visiting the page
      Login.visit();
      // Entering the username and password
      Login.fillUsername(user3.username);
      Login.fillPassword(user3.password);
      // Clicking the login button
      Login.clickLoginButton();
      // Verifying the login
      Login.verify();
      cy.log('User has logged in');
    });
  });
  it('Performance Glitch User Logs in', () => {
    cy.fixture('credentials').then((credentials) => {
      const user4 = credentials.user4;

      // Visiting the page
      Login.visit();
      // Entering the username and password
      Login.fillUsername(user4.username);
      Login.fillPassword(user4.password);
      // Clicking the login button
      Login.clickLoginButton();
      // Verifying the login
      Login.verify();
      cy.log('User has logged in');
    });
  });   
  it ('Error User Logs in', () => {
    cy.fixture('credentials').then((credentials) => {
      const user5 = credentials.user5;

      // Visiting the page
      Login.visit();
      // Entering the username and password
      Login.fillUsername(user5.username);
      Login.fillPassword(user5.password);
      // Clicking the login button
      Login.clickLoginButton();
      // Verifying the login
      Login.verify();
      cy.log('User has logged in');

    });
  });
  it ('Visual Error User Logs in', () => {
    cy.fixture('credentials').then((credentials) => {
      const user6 = credentials.user6;

      // Visiting the page
      Login.visit();
      // Entering the username and password
      Login.fillUsername(user6.username);
      Login.fillPassword(user6.password);
      // Clicking the login button
      Login.clickLoginButton();
      // Verifying the login
      Login.verify();
      cy.log('User has logged in');
    });
  });
  it ('Incorrect User Credentials Logs in', () => {
    cy.fixture('credentials').then((credentials) => {
      const user7 = credentials.user7;

      // Visiting the page
      Login.visit();
      // Entering the username and password
      Login.fillUsername(user7.username);
      Login.fillPassword(user7.password);
      // Clicking the login button
      Login.clickLoginButton();
      // Verifying Error Message Incorrect Username and/or Password
      Login.verifyIncorrectCredentialsError();
      cy.log('User has not logged in');
    });
  });
  it ('Empty User Logs in', () => {
    cy.fixture('credentials').then((credentials) => {
      const user8 = credentials.user8;

      // Visiting the page
      Login.visit();
      // Entering the username and password
      Login.fillUsername(user8.username);
      Login.fillPassword(user8.password);
      // Clicking the login button
      Login.clickLoginButton();
     // Verifying Error Message Incorrect Username and/or Password
     Login.verifyIncorrectCredentialsError();
     cy.log('User has not logged in');
    });
  });
});
