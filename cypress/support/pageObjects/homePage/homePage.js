const locators = require('./homepage-locators')

class homePage {
    goToHomePage() {
        cy.visit('https://www.demoblaze.com/index.html', { timeout: 60000 });
    }

    clickSingUpMenu() {
        cy.get(locators.menu_signup).should('be.visible').click();
    }

    clickLoginMenu() {
        cy.get(locators.menu_login).should('be.visible').click();
    }

    assertLoginSuccess(user) {
         cy.get(locators.login_user).should('contain', `Welcome ${user}`);
         cy.wait(1000);
     }

    clickCartMenu() {
        cy.get(locators.menu_cart).should('be.visible').click();
    }
}

module.exports = new homePage();
