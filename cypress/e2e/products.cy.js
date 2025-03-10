import Login from '../pageObject/loginPage';
import Products from '../pageObject/productsPage';

describe('Users interacts with Products', () => {
  it('Standard User adds products', () => {
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
      Products.verifyProductsBaseUrl();
      // Adding a product to the cart
      Products.clickItemAddButtonBackPack();
      // Clicking the shopping cart link
      Products.clickShoppingCartLink();
      // Clicking the checkout button
      Products.clickCheckoutButton();
      // Filling out the checkout form 
      Products.fillCheckOutFirstName('John');
      Products.fillCheckOutLastName('Doe');
      Products.fillCheckOutZipCode('12345');
      // Clicking the continue button
      Products.clickContinueButton();
      // Clicking the finish button
      Products.clickFinishButton();
      // Verifying the complete container
      Products.verifyCompleteContainer();
      // Clicking the back to home button
      Products.clickBacktoHomeButton();
    });
  })
})