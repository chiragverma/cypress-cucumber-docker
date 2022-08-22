import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import HomePageSelector from '../../../selectors/homePageSelector.js';
import RoomPageSelector from '../../../selectors/roomPageSelector.js';

Given('I open Home Page', () => {
  cy.visit('/')
});

When('I fill the place input with {string}', (place) => {
  cy.get(HomePageSelector.place).type(place)
  cy.get(HomePageSelector.suggestion).contains(place).click()
});

When('I fill the nextmonth checkin date {string} and checkout {string} and hit search', (checkin, checkout) => {
  cy.get(HomePageSelector.nextMonth).click().click()
  cy.get(HomePageSelector.calenderDay).contains(checkin).click({force: true})
  cy.get(HomePageSelector.calenderDay).contains(checkout).click({force: true})
  cy.get(HomePageSelector.search).click();
});

When('I select the room', () => {
  cy.get(RoomPageSelector.selectRoom).eq(1).click()
});

Then('I should be on Get A Room page', (expected) => {
  cy.get(RoomPageSelector.getRoomElement).contains('Get a room')
});