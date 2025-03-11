import Login from '../pageObject/loginPage';
import Products from '../pageObject/productsPage';
import ShoppingCart from '../pageObject/shoppingCart';

describe('Users adds one product & completes checkout process', () => {
  it('Standard User adds one product', () => {
    // Load credentials fixture
    cy.fixture('credentials').then((credentials) => {
      const user1 = credentials.user1;

      // Load product data fixture
      cy.fixture('userData').then((userData) => {
        const data1 = userData.data1;

        // Visiting the login page and performing login actions
        Login.visit();
        Login.fillUsername(user1.username);
        Login.fillPassword(user1.password);
        Login.clickLoginButton();

        // Verifying the user has landed on the products page
        Products.verifyProductsBaseUrl();

        // Adding one product to the cart
        Products.clickItemAddButtonBackPack();

        // Clicking the shopping cart link
        ShoppingCart.clickShoppingCartLink();

        // Proceeding to checkout
        ShoppingCart.clickCheckoutButton();

        // Filling out the checkout form with regular user data 
        ShoppingCart.fillCheckOutFirstName(data1.firstName);
        ShoppingCart.fillCheckOutLastName(data1.lastName);
        ShoppingCart.fillCheckOutZipCode(data1.postalCode);  

        // Clicking the continue button
        ShoppingCart.clickContinueButton();

        // Clicking the finish button to complete the order
        ShoppingCart.clickFinishButton();

        // Verifying that the order completion message appears
        ShoppingCart.verifyCompleteContainer();

        // Clicking the back to home button after order completion
        ShoppingCart.clickBacktoHomeButton();
      });
    });
  });
  it ('Standard User adds all the products', () => {
    // Load credentials fixture
    cy.fixture('credentials').then((credentials) => {
      const user1 = credentials.user1;

      // Load product data fixture
      cy.fixture('userData').then((userData) => {
        const data2 = userData.data2;

        // Visiting the login page and performing login actions
        Login.visit();
        Login.fillUsername(user1.username);
        Login.fillPassword(user1.password);
        Login.clickLoginButton();

        // Verifying the user has landed on the products page
        Products.verifyProductsBaseUrl();

        // Adding all products to the cart
        Products.clickItemAddButtonBackPack();
        Products.clickItemAddButtonBikeLight();
        Products.clickItemAddButtonBoltTShirt();
        Products.clickItemAddButtonFleeceJacket();
        Products.clickItemAddButtonOnesie();
        Products.clickItemAddButtonRedTShirt();

        // Clicking the shopping cart link
        ShoppingCart.clickShoppingCartLink();

        // Proceeding to checkout
        ShoppingCart.clickCheckoutButton();
        
        // Filling out the checkout form with regular user data
        ShoppingCart.fillCheckOutFirstName(data2.firstName);
        ShoppingCart.fillCheckOutLastName(data2.lastName);
        ShoppingCart.fillCheckOutZipCode(data2.postalCode);

        // Clicking the continue button
        ShoppingCart.clickContinueButton();
        
        // Clicking the finish button to complete the order
        ShoppingCart.clickFinishButton();

        // Verifying that the order completion message appears
        ShoppingCart.verifyCompleteContainer();

        // Clicking the back to home button after order completion
        ShoppingCart.clickBacktoHomeButton();
      });
    });
  });
  it('Standard User adds two products & super long data', () => {
    // Load credentials fixture
    cy.fixture('credentials').then((credentials) => {
      const user1 = credentials.user1;

      // Load product data fixture
      cy.fixture('userData').then((userData) => {
        const data3 = userData.data3;

        // Visiting the login page and performing login actions
        Login.visit();
        Login.fillUsername(user1.username);
        Login.fillPassword(user1.password);
        Login.clickLoginButton();

        // Verifying the user has landed on the products page
        Products.verifyProductsBaseUrl();

        // Adding one product to the cart
        Products.clickItemAddButtonBackPack();

        // Clicking the shopping cart link
        ShoppingCart.clickShoppingCartLink();

        // Proceeding to checkout
        ShoppingCart.clickCheckoutButton();

        // Filling out the checkout form with regular user data 
        ShoppingCart.fillCheckOutFirstName(data3.firstName);
        ShoppingCart.fillCheckOutLastName(data3.lastName);
        ShoppingCart.fillCheckOutZipCode(data3.postalCode);  

        // Clicking the continue button
        ShoppingCart.clickContinueButton();

        // Clicking the finish button to complete the order
        ShoppingCart.clickFinishButton();

        // Verifying that the order completion message appears
        ShoppingCart.verifyCompleteContainer();

        // Clicking the back to home button after order completion
        ShoppingCart.clickBacktoHomeButton();
      });
    });
  });
});
