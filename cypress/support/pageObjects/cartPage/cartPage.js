const locators = require('./cartpage-locators')

class cartPage{
    goToCartPage() {
        cy.url().should('include', 'cart.html');
        cy.get(locators.product_header).should('contain', 'Products');
    }

    addProductToCart() {
        cy.get(locators.product_link).first().click();
        cy.get(locators.button_addtocart).should('be.visible').click();

        cy.on('window:alert', (message) => {
            expect(message).to.include('Product added');
        });

        cy.visit('https://www.demoblaze.com/index.html');
    }

    clickPlaceOrderButton() {
        cy.xpath(locators.button_order).should('be.visible').and('not.be.disabled').click();
    }

    placeOrderForm({ name, country, city, card, month, year }) {
        cy.xpath(locators.label_placeorder_modal).should('be.visible');
        cy.get(locators.input_name).should('be.visible').clear().type(name);
        cy.get(locators.input_country).clear().type(country);
        cy.get(locators.input_city).clear().type(city);
        cy.get(locators.input_card).clear().should('be.visible').type(card);
        cy.get(locators.input_month).clear().type(month);
        cy.get(locators.input_year).clear().type(year);
        cy.xpath(locators.purchase_button).should('be.visible').click();
    }

    assertPurchaseSuccess() {
        cy.get(locators.sweet_alert).should('be.visible').and('contain', 'Thank you for your purchase!');
        cy.get(locators.button_confirm).should('be.visible').click();
    }
    
}

module.exports = new cartPage();