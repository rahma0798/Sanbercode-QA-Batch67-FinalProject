const locators = require('./homepage-locators')

class homePage {
    goToHomePage() {
        cy.visit('https://www.demoblaze.com/index.html', { timeout: 30000 });
    }

    clickSingUpMenu() {
        cy.get(locators.menu_signup).should('be.visible').click();
    }

    clickLoginMenu() {
        cy.get(locators.menu_login, { timeout: 10000 }).should('be.visible').click();
    }

    clickCartMenu() {
        cy.get(locators.menu_cart).should('be.visible').click();
    }
}

module.exports = new homePage();
