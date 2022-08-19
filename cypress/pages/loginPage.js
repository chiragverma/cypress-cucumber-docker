export default class LoginPage {

path = "/Login.aspx";
    
     
// Variables for element locators
username = "#ctl00_CPHContainer_txtUserLogin";
password = "#ctl00_CPHContainer_txtPassword";
loginButton = "#ctl00_CPHContainer_btnLoginn";

    
visitLogin(){
    
  cy.visit(this.path);
    
}
    
    
typeUsername(username){
    
  cy.get(this.username).type(username);
    
}
    
     
    
typePassword(password){
    
  cy.get(this.password).type(password);
    
}
    
     
    
clickLogin(){
    
  cy.get(this.loginButton).click();
    
}}