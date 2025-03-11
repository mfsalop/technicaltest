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
    cy.log('Products sorted by A-Z');
    // Sort product list by Z-A
    Products.shortZA();
    cy.log('Products sorted by Z-A');
    // Sort product list by Low to High
    Products.shortLOHI();
    cy.log('Products sorted by Low to High');
    // Sort product list by High to Low
    Products.shortHILO();
    cy.log('Products sorted by High to Low');
    
  });
  
  it('Standard User clicks on Product Item Name ', () => {
    // User clicks on Product Link Name
    Products.clickBackPackNameLink();
    cy.log('User clicked on Product Item Name');
    // Verify User is in the correct product page
    Products.verifyInventoryItemName();
    // User clicks on Return to Products Button
    cy.log('User clicked on Return to Products Button');
    Products.clickBackToProductButton();  
    // Verify User is in the correct product page
    Products.verifyProductsBaseUrl();
  });

  it('Standard User clicks on Product Item Image', () => {
    // User clicks on Product Link Name
    Products.clickBackPackImgLink();
    cy.log('User clicked on Product Item Image');
    // Verify User is in the correct product page
    Products.verifyInventoryItemName();
    // User clicks on Return to Products Button
    Products.clickBackToProductButton();  
    cy.log('User clicked on Return to Products Button');
    // Verify User is in the correct product page
    Products.verifyProductsBaseUrl();
  });

});
