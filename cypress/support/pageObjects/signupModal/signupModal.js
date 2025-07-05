const locators = require('./signup-locators')

class signupModal{
     verifySignUpModalAppears() {
         cy.xpath(locators.label_signup_modal).should('be.visible')
     }

     inputUsername(user) {
         cy.get(locators.input_username_field).should('be.visible').clear().type(user).should('have.value', user);
     }

     inputPassword(password) {
         cy.get(locators.input_password_field).should('be.visible').clear().type(password).should('have.value', password);
     }

     clickSignUpButton() {
         cy.xpath(locators.button_signup).should('be.visible').click();
     }

}

module.exports = new signupModal();
