export default class SecurePage {

path = "/secure";
    
    
// Create variables for element locators
message = "Welcome to TestYou - Attempt Unlimited Online Tests";

// Create independent methods to do actions on elements
getMessage(){
    
  return cy.contains(this.message)
  
}}