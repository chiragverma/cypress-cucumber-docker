export default class ForgetPassword {

path = "/ForgetPassword.aspx";
        
// Variables for element locators
forgetUsername = "#ctl00_CPHContainer_txtEmailId";
forgetSubmit = "#ctl00_CPHContainer_btnChangePassword";
resetEmailMessage = "Please Wait ...!";

        
visitForgetPasswordPage(){
        
  cy.visit(this.path);
        
}
        
        
typeUsername(username){
        
  cy.get(this.forgetUsername).type(username);
        
}
            
        
clickSubmit(){
        
  cy.get(this.forgetSubmit).click();
        
}

getMessage(){
    
  return cy.contains(this.resetEmailMessage)
  
}}