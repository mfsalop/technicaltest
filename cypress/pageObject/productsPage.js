class Products {
    productsBaseUrl = 'https://www.saucedemo.com/inventory.html';
    productsContainerList = '[data-test="inventory-container"]';

    //Product Information Dynamic Selectors
    inventoryItem = '[data-test="inventory-item"]'; //Product Container
    inventoryItemName = '[data-test="inventory-item-name"]'; //Product Name
    inventoryItemPrice = '[data-test="inventory-item-price"]'; //Product Price
    inventoryItemDescription = '[data-test="inventory-item-desc"]'; //Product Description
    backToProductButton = '[data-test="back-to-products"]'; //Back to Products Button
    
    //Product Information Static Selectors
    // BackPack Item List View
    itemAddButtonBackPack = '[data-test="add-to-cart-sauce-labs-backpack"]';
    itemRemoveButtonBackPack = '[data-test="remove-sauce-labs-backpack"]';
    inventoryBackPackNameLink = '[data-test="item-4-title-link"]';
    inventoryItemImgLink = '[data-test="item-4-img-link"]';
    inventoryImgSrc = 'data-test="inventory-item-sauce-labs-backpack-img"]';

    //Bike Light Item List View
    itemAddButtonBikeLight = '[data-test="add-to-cart-sauce-labs-bike-light"]';
    itemRemoveButtonBikeLight = '[data-test="remove-sauce-labs-bike-light"]';

    //Bolt T-Shirt Item List View
    itemAddButtonBoltTShirt = '[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]';
    itemRemoveButtonBoltTShirt = '[data-test="remove-sauce-labs-bolt-t-shirt"]';

    //Fleece Jacket Item List View
    itemAddButtonFleeceJacket = '[data-test="add-to-cart-sauce-labs-fleece-jacket"]';
    itemRemoveButtonFleeceJacket = '[data-test="remove-sauce-labs-fleece-jacket"]';

    //Onesie Item List View
    itemAddButtonOnesie = '[data-test="add-to-cart-sauce-labs-onesie"]';
    itemRemoveButtonOnesie = '[data-test="remove-sauce-labs-onesie"]';

    //Red T-Shirt Item List View
    itemAddButtonRedTShirt = '[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]';
    itemRemoveButtonRedTShirt = '[data-test="remove-test.allthethings()-t-shirt-(red)"]';

    //Filter Selectors
    filterElement = '[data-test="product-sort-container"]';
    
    verifyProductsBaseUrl = () => {
        cy.url().should('include', this.productsBaseUrl);
    }

    //BacjPack Items Actions
    clickItemAddButtonBackPack() {
        cy.get(this.itemAddButtonBackPack).click();  
    }
    clickItemRemoveButtonBackPack() {
        cy.get(this.itemRemoveButtonBackPack).click();  
    }
    clickBackPackItemNameLink() {
        cy.get(this.inventoryBackPackNameLink).click();  
    }
    clickinventoryItemImgLink() {
        cy.get(this.inventoryItemImgLink).click();  
    }

    //Bike Light Items Actions
    clickItemAddButtonBikeLight() {
        cy.get(this.itemAddButtonBikeLight).click();  
    }
    clickItemRemoveButtonBikeLight() {
        cy.get(this.itemRemoveButtonBikeLight).click();  
    }

    //Bolt T-Shirt Items Actions
    clickItemAddButtonBoltTShirt() {
        cy.get(this.itemAddButtonBoltTShirt).click();  
    }
    clickItemRemoveButtonBoltTShirt() {
        cy.get(this.itemRemoveButtonBoltTShirt).click();  
    }

    //Fleece Jacket Items Actions
    clickItemAddButtonFleeceJacket() {
        cy.get(this.itemAddButtonFleeceJacket).click();  
    }
    clickItemRemoveButtonFleeceJacket() {
        cy.get(this.itemRemoveButtonFleeceJacket).click();  
    }

    //Onesie Items Actions
    clickItemAddButtonOnesie() {
        cy.get(this.itemAddButtonOnesie).click();  
    }
    clickItemRemoveButtonOnesie() {
        cy.get(this.itemRemoveButtonOnesie).click();  
    }

    //Red T-Shirt Items Actions
    clickItemAddButtonRedTShirt() {
        cy.get(this.itemAddButtonRedTShirt).click();  
    }
    clickItemRemoveButtonRedTShirt() {
        cy.get(this.itemRemoveButtonRedTShirt).click();  
    }

    ///Filter element actions
    shortAZ() {
        cy.get(this.filterElement).select('az');
    }
    shortZA() {
        cy.get(this.filterElement).select('za');
    }
    shortLOHI() {
        cy.get(this.filterElement).select('lohi');
    }
    shortHILO() {
        cy.get(this.filterElement).select('hilo');
    }
}
export default new Products();







