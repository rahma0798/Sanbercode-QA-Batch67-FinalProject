const locators = require('./login-locators')

class loginModal{
     verifyLoginModalAppears() {
         cy.xpath(locators.label_login_modal).should('be.visible');
     }

     inputUsername(user) {
         cy.get(locators.input_username_field, { timeout: 20000 }).should('be.visible').clear().type(user).should('have.value', user);
     }

     inputPassword(password) {
         cy.get(locators.input_password_field).should('be.visible').clear().type(password).should('have.value', password)
     }

     clickLoginButton() {
         cy.xpath(locators.button_login).should('be.visible').and('not.be.disabled').click();
     }

     assertLoginSuccess(user) {
         cy.get(locators.login_user, { timeout: 10000 }).should('be.visible').and('contain', `Welcome ${user}`);
     }

}

module.exports = new loginModal();