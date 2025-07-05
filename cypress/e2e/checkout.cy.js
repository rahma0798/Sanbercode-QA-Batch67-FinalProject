const homePage = require('../support/pageObjects/homePage/homePage');
const loginModal = require('../support/pageObjects/loginModal/loginModal');
const cartPage = require('../support/pageObjects/cartPage/cartPage');
const user = require('../fixtures/userData.json');
const { faker } = require('@faker-js/faker');

describe('Checkout Feature', () => {
  before(() => {
    cy.fixture('userData.json').then(({ user, password }) => {
      homePage.clickLoginMenu();
      loginModal.verifyLoginModalAppears();
      loginModal.inputUsername(user);
      loginModal.inputPassword(password);
      loginModal.clickLoginButton();
      loginModal.assertLoginSuccess(user);
    });
  });

  it('should add product to cart and complete purchase', () => {
    cartPage.addProductToCart('Nokia lumia 1520', { timeout: 20000 });
    homePage.clickCartMenu();
    cartPage.goToCartPage();
    cartPage.clickPlaceOrderButton();

    cartPage.fillOrderForm({
      name: faker.person.fullName(),
      country: faker.location.country(),
      city: faker.location.city(),
      card: faker.finance.creditCardNumber(),
      month: faker.date.month(),
      year: faker.date.future().getFullYear(),
    });

    cartPage.clickPurchaseButton();
    cartPage.assertPurchaseSuccess();
  });
});