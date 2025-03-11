import Login from '../pageObject/loginPage';
import Products from '../pageObject/productsPage';
import ShoppingCart from '../pageObject/shoppingCart';

describe('Users add products & complete checkout process', () => {
  let userData;

  beforeEach(() => {
    // Load credentials and user data fixtures before tests
    cy.fixture('credentials').then((credentials) => {
      const user1 = credentials.user1;
      // Login with standard user
      Login.visit();
      Login.fillUsername(user1.username);
      Login.fillPassword(user1.password);
      Login.clickLoginButton();
      // Verify the user has landed on the products page
      Products.verifyProductsBaseUrl();
      cy.log('User has logged in');
    });

    // Load user data once for all tests
    cy.fixture('userData').then((data) => {
      userData = data;
    });
  });

  // Utility function to add multiple items to the cart
  const addItemsToCart = (items) => {
    items.forEach(item => {
      Products[`clickItemAddButton${item}`]();
    });
  };

  // Utility function to fill checkout form
  const fillCheckoutForm = (data) => {
    ShoppingCart.fillCheckOutFirstName(data.firstName);
    ShoppingCart.fillCheckOutLastName(data.lastName);
    ShoppingCart.fillCheckOutZipCode(data.postalCode);
  };

  it('Standard User adds one product and completes checkout', () => {
    // Add one product to the cart
    addItemsToCart(['BackPack']);

    // Checkout process
    ShoppingCart.clickShoppingCartLink();
    ShoppingCart.clickCheckoutButton();
    fillCheckoutForm(userData.data1);
    ShoppingCart.clickContinueButton();
    ShoppingCart.clickFinishButton();

    // Verify order completion and navigate back to home
    ShoppingCart.verifyCompleteContainer();
    ShoppingCart.clickBacktoHomeButton();
  });

  it ('Standard User adds all products and completes checkout', () => {
    // Add all products to the cart
    addItemsToCart(['BackPack', 'BikeLight', 'BoltTShirt', 'FleeceJacket', 'Onesie', 'RedTShirt']);
    cy.log('All products have been added to the cart');

    // Checkout process
    ShoppingCart.clickShoppingCartLink();
    ShoppingCart.clickCheckoutButton();
    fillCheckoutForm(userData.data2);
    ShoppingCart.clickContinueButton();
    ShoppingCart.clickFinishButton();
    cy.log('Checkout process has been completed');

    // Verify order completion and navigate back to home
    ShoppingCart.verifyCompleteContainer();
    cy.log('Order has been completed');
    ShoppingCart.clickBacktoHomeButton();
    cy.log('User has navigated back to home');
  });

  it('Standard User adds two products and completes checkout', () => {
    // Add two products to the cart
    addItemsToCart(['BackPack', 'BikeLight']);
    cy.log('Two products have been added to the cart');

    // Checkout process
    ShoppingCart.clickShoppingCartLink();
    ShoppingCart.clickCheckoutButton();
    fillCheckoutForm(userData.data3);
    ShoppingCart.clickContinueButton();
    ShoppingCart.clickFinishButton();
    cy.log('Checkout process has been completed');

    // Verify order completion and navigate back to home
    ShoppingCart.verifyCompleteContainer();
    cy.log('Order has been completed');
    ShoppingCart.clickBacktoHomeButton();
    cy.log('User has navigated back to home');
  });
});
