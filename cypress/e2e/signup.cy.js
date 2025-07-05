const homePage = require('../support/pageObjects/homePage/homePage');
const signupModal = require('../support/pageObjects/signupModal/signupModal');
const { faker } = require('@faker-js/faker')

describe('Sign Up Feature', () => {
const user = faker.internet.userName().toLowerCase();
const password = faker.internet.password();

before(() =>{
  homePage.goToHomePage();
})

// afterEach(()=>{
//   signupModal.clickSignUpButton();
// })

  it('sign up with correct values', () => {
      homePage.clickSingUpMenu();
      signupModal.verifySignUpModalAppears();
      signupModal.inputUsername(user);
      signupModal.inputPassword(password);
      cy.window().then((win) => cy.stub(win, 'alert').as('alertStub'));
      signupModal.clickSignUpButton();
      cy.get('@alertStub', { timeout: 10000 }).should('have.been.calledWith', 'Sign up successful.');

  })

after(() => {
  cy.writeFile('cypress/fixtures/userData.json', {
    user: user,
    password: password,
  });
});

  //  it('sign up with existing data', () => {
  //     homePage.clickSingInMenu();
  //     signupModal.verifySignUpModalAppears();
  //     signupModal.inputUsername(userData.invalid_username);
  //     signupModal.inputPassword(userData.invalid_password);
  // })

  
})