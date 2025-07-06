const locators = require('./login-locators')

class loginModal{
     loginForm(user,password) {
         cy.xpath(locators.label_login_modal).should('be.visible');
         cy.get(locators.input_username_field).clear().type(user, { delay: 100 }).should('have.value', user);
         cy.get(locators.input_password_field).clear().type(password, { delay: 100 }).should('have.value', password);
         cy.xpath(locators.button_login).should('be.visible').click();
     }

}

module.exports = new loginModal();