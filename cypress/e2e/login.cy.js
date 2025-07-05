const homePage = require('../support/pageObjects/homePage/homePage');
const loginModal = require('../support/pageObjects/loginModal/loginModal');

// before(function () {
//   cy.fixture('userData.json').as('user');
// });

beforeEach(() => {
  homePage.goToHomePage();
});

// afterEach(()=>{
//   loginModal.clickLoginButton();
// })

describe('Login Feature', () => {
  it('should login successfully', () => {
    cy.fixture('userData.json').then(({ user, password }) => {
      homePage.clickLoginMenu();
      loginModal.verifyLoginModalAppears();
      loginModal.inputUsername(user);
      loginModal.inputPassword(password);
      loginModal.clickLoginButton();
      loginModal.assertLoginSuccess(user);
    });
  });
});
