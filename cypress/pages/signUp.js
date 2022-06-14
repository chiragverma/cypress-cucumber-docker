export default class LoginPage {

    path = "/SignUp.aspx";
        
         
    // Variables for element locators
    name = "#ctl00_CPHContainer_txtUserLogin";
    email = "#ctl00_CPHContainer_txtPassword";
    loginId = "#ctl00_CPHContainer_btnLoginn";
    password = "#ctl00_CPHContainer_btnLoginn";
    repassword = "#ctl00_CPHContainer_btnLoginn";
    createAccoutButton = "#ctl00_CPHContainer_btnLoginn";
    
        
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