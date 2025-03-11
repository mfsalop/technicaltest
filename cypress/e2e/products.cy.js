import Login from '../pageObject/loginPage';
import Products from '../pageObject/productsPage';

describe('Standard User interacts with Products', () => {
  beforeEach(() => {
    cy.fixture('credentials').then((credentials) => {
      const user1 = credentials.user1;
      // Login with standard user
      Login.visit();
      Login.fillUsername(user1.username);
      Login.fillPassword(user1.password);
      Login.clickLoginButton();
      // Verify the user has landed on the products page
      Products.verifyProductsBaseUrl();
    });
  });

  it('Standard User short products list', () => {
    // Click on filter button 
    // Sort product list by A-Z
    Products.shortAZ();
    // Sort product list by Z-A
    Products.shortZA();
    // Sort product list by Low to High
    Products.shortLOHI();
    // Sort product list by High to Low
    Products.shortHILO();
    
  });
  
  it('Standard User clicks on Product Item Name ', () => {
    // User clicks on Product Link Name
    Products.clickBackPackNameLink();
    // Verify User is in the correct product page
    Products.verifyInventoryItemName();
    // User clicks on Return to Products Button
    Products.clickBackToProductButton();  
    // Verify User is in the correct product page
    Products.verifyProductsBaseUrl();
  });

  it('Standard User clicks on Product Item Image', () => {
    // User clicks on Product Link Name
    Products.clickBackPackImgLink();
    // Verify User is in the correct product page
    Products.verifyInventoryItemName();
    // User clicks on Return to Products Button
    Products.clickBackToProductButton();  
    // Verify User is in the correct product page
    Products.verifyProductsBaseUrl();
  });

});
