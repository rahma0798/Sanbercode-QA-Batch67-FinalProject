const locators = require('./cartpage-locators')

class cartPage{
    goToCartPage() {
        cy.url().should('include', 'cart.html');
        cy.get(locators.product_header).should('contain', 'Products');
    }

    addProductToCart(productName) {
        cy.contains(locators.product_card, productName).click();
        cy.get(locators.button_addtocart, { timeout: 10000 }).should('be.visible').click();

        cy.on('window:alert', (message) => {
            expect(message).to.include('Product added');
        });

        //cy.visit('https://www.demoblaze.com/index.html');
    }

    clickPlaceOrderButton() {
        cy.xpath(locators.button_order).should('be.visible').and('not.be.disabled').click();
    }

    verifyPlaceOrderModalAppears() {
        cy.xpath(locators.label_placeorder_modal).should('be.visible');
    }

    fillOrderForm({ name, country, city, card, month, year }) {
        cy.get(locators.input_name, { timeout: 10000 }).should('be.visible').type(name);
        cy.get(locators.input_country).type(country);
        cy.get(locators.input_city).type(city);
        cy.get(locators.input_card).should('be.visible').type(card);
        cy.get(locators.input_month).type(month);
        cy.get(locators.input_year).type(year);
    }

    clickPurchaseButton() {
        cy.xpath(locators.purchase_button).should('be.visible').and('not.be.disabled').click();
    }

    assertPurchaseSuccess() {
        cy.get(locators.sweet_alert).should('be.visible').and('contain', 'Thank you for your purchase!');
        cy.get(locators.button_confirm).click();
    }
    
}

module.exports = new cartPage();