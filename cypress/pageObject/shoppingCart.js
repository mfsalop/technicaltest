class ShoppingCart {
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

}

export default new ShoppingCart();