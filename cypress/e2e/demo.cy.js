const homePage = require('../support/pageObjects/homePage/homePage');
const signupModal = require('../support/pageObjects/signupModal/signupModal');
const loginModal = require('../support/pageObjects/loginModal/loginModal');
const cartPage = require('../support/pageObjects/cartPage/cartPage');
const { faker } = require('@faker-js/faker')

const user = faker.internet.userName().toLowerCase();
const password = faker.internet.password();

describe('demoblaze cypress test is success', () => {

beforeEach(() => {
    homePage.goToHomePage();
});


  it('should sign up new user', () => {
      homePage.clickSingUpMenu();
      signupModal.signupForm(user,password);

  })

  it('should login as the signed up user', () => {
      homePage.clickLoginMenu();
      loginModal.loginForm(user,password);
      cy.wait(2000);
      homePage.assertLoginSuccess(user);
  });

  it('should add product to cart and complete purchase', () => {
    cartPage.addProductToCart();
    homePage.clickCartMenu();
    cartPage.goToCartPage();
    cartPage.clickPlaceOrderButton();

    cartPage.placeOrderForm({
      name: faker.person.fullName(),
      country: faker.location.country(),
      city: faker.location.city(),
      card: faker.finance.creditCardNumber(),
      month: faker.date.month(),
      year: faker.date.future().getFullYear(),
    });

    cartPage.assertPurchaseSuccess();
  });

  
})