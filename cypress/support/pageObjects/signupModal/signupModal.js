const locators = require('./signup-locators')

class signupModal{
     signupForm(user,password) {
         cy.xpath(locators.label_signup_modal).should('be.visible');
         cy.get(locators.input_username_field).clear().type(user, { delay: 100 });
         cy.get(locators.input_password_field).clear().type(password, { delay: 100 });
         cy.window().then((win) => cy.stub(win, 'alert').as('alertStub'));
         cy.xpath(locators.button_signup).should('be.visible').click();
         cy.get('@alertStub').should('have.been.calledWith', 'Sign up successful.');
         cy.wait(1000);
     }

}

module.exports = new signupModal();
