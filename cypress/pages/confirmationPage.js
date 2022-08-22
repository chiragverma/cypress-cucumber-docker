// this will not be part of the test

export default class ConfirmPage {
    
    
// Create variables for element locators
message = "GET A ROOM";

// Create independent methods to do actions on elements
getMessage(){
    
  return cy.contains(this.message)
  
}}