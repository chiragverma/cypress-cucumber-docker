import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from '../../../pages/homePage';
import ConfirmPage from '../../../pages/confirmationPage';
import HomeSelector from '../../../selectors/homeSelector.js';

const homePage = new HomePage();


Given('I open Home Page', () => {
  cy.visit('/')
});


When('I fill the place input with {string}', (place) => {
  cy.get(HomeSelector.place).type(place)
  cy.get(HomeSelector.suggestion).contains(place).click()
});

When('I fill the nextmonth checkin date {string} and checkout {string} and hit search', (checkin, checkout) => {
  cy.get(HomeSelector.nextMonth).click()
  cy.get(HomeSelector.calenderDay).contains(checkin).click({force: true})
  cy.get(HomeSelector.calenderDay).contains(checkout).click({force: true})
  cy.get(HomeSelector.search).click();
});


When('I select the room', () => {
  cy.get('.hotelcard-bttns-rates').eq(1).click()
});


Then('I should be on Get A Room page', (expected) => {
  cy.get(HomeSelector.getRoomElement).contains('Get a room')
});