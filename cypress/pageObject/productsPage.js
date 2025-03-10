class Products {
    productsBaseUrl = 'https://www.saucedemo.com/inventory.html';
    productsContainerList = '[data-test="inventory-container"]';

    //Product Information Dynamic Selectors
    inventoryItem = '[data-test="inventory-item"]'; //Product Container
    inventoryItemName = '[data-test="inventory-item-name"]'; //Product Name
    inventoryItemPrice = '[data-test="inventory-item-price"]'; //Product Price
    inventoryItemDescription = '[data-test="inventory-item-desc"]'; //Product Description
    
    //Product Information Static Selectors
    itemAddButtonBackPack = '[data-test="add-to-cart-sauce-labs-backpack"]';
    itemAddButtonBikeLight = '[data-test="add-to-cart-sauce-labs-bike-light"]';
    itemAddButtonBoltTShirt = '[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]';
    itemAddButtonFleeceJacket = '[data-test="add-to-cart-sauce-labs-fleece-jacket"]';
    itemAddButtonOnesie = '[data-test="add-to-cart-sauce-labs-onesie"]';
    itemAddButtonRedTShirt = '[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]';
    itemAddButtonYellowTShirt = '[data-test="add-to-cart-test.allthethings()-t-shirt-(yellow)"]';
    itemRemoveButtonBackPack = '[data-test="remove-sauce-labs-backpack"]';
    itemRemoveButtonBikeLight = '[data-test="remove-sauce-labs-bike-light"]';
    itemRemoveButtonBoltTShirt = '[data-test="remove-sauce-labs-bolt-t-shirt"]';
    itemRemoveButtonFleeceJacket = '[data-test="remove-sauce-labs-fleece-jacket"]';
    itemRemoveButtonOnesie = '[data-test="remove-sauce-labs-onesie"]';
    itemRemoveButtonRedTShirt = '[data-test="remove-test.allthethings()-t-shirt-(red)"]';
    itemRemoveButtonYellowTShirt = '[data-test="remove-test.allthethings()-t-shirt-(yellow)"]';
   
    //Shopping Cart & Checkout Elements
    shoppingCartLink = '[data-test="shopping-cart-link"]' //Shopping Cart Link
    checkoutButton = '[data-test="checkout"]'; //Checkout Button
    textCheckOutFirstName = '[data-test="firstName"]'; //First Name Field
    textCheckOutLastName = '[data-test="lastName"]'; //Last Name Field  
    textCheckOutZipCode = '[data-test="postalCode"]'; //Zip Code Field
    continueButton = '[data-test="continue"]'; //Continue Button
    finishButton = '[data-test="finish"]'; //Finish Button
    completeContainer = '[data-test="checkout-complete-container"]'; //Complete Container
    backtoHomeButton = '[data-test="back-to-products"]'; //Back to Home Button


    //inventoryItemAddButton = '[data-test="add-to-cart-sauce-labs-backpack"]';
    //inventoryItemRemoveButtom = '[data-test="remove-sauce-labs-backpack"]';
    //inventoryItemNameLink = '[data-test="item-4-title-link"]';
    //inventoryItemImgLink = '[data-test="item-4-img-link"]';
    //inventoryImgSrc = 'data-test="inventory-item-sauce-labs-backpack-img"]';

    verifyProductsBaseUrl = () => {
        cy.url().should('include', this.productsBaseUrl);
    }
    clickItemAddButtonBackPack() {
        cy.get(this.itemAddButtonBackPack).click();  
    }
    clickItemAddButtonBikeLight() {
        cy.get(this.itemAddButtonBikeLight).click();  
    }
    clickItemAddButtonBoltTShirt() {
        cy.get(this.itemAddButtonBoltTShirt).click();  
    }
    clickItemAddButtonFleeceJacket() {
        cy.get(this.itemAddButtonFleeceJacket).click();  
    }
    clickItemAddButtonOnesie() {
        cy.get(this.itemAddButtonOnesie).click();  
    }
    clickItemAddButtonRedTShirt() {
        cy.get(this.itemAddButtonRedTShirt).click();  
    }
    clickItemAddButtonYellowTShirt() {
        cy.get(this.itemAddButtonYellowTShirt).click();  
    }
    clickShoppingCartLink() {
        cy.get(this.shoppingCartLink).click();
    }
    clickCheckoutButton() {
        cy.get(this.checkoutButton).click();
    }
    fillCheckOutFirstName(firstName) {
        cy.get(this.textCheckOutFirstName).type(firstName);
    }
    fillCheckOutLastName(lastName) {
        cy.get(this.textCheckOutLastName).type(lastName);
    }
    fillCheckOutZipCode(zipCode) {
        cy.get(this.textCheckOutZipCode).type(zipCode);
    }
    clickContinueButton() {
        cy.get(this.continueButton).click();
    }
    clickFinishButton() {
        cy.get(this.finishButton).click();
    }
    verifyCompleteContainer = () => {
        cy.get(this.completeContainer).should('be.visible');
    }
    clickBacktoHomeButton() {
        cy.get(this.backtoHomeButton).click();
    }

    //getInventoryItemName() {
    // return cy.get(this.inventoryItemName);
    //}
    //getInventoryItemPrice() {
    // return cy.get(this.inventoryItemPrice);
    //}
    //getInventoryItemDescription() {
    //return cy.get(this.inventoryItemDescription);
    //}

}
export default new Products();







