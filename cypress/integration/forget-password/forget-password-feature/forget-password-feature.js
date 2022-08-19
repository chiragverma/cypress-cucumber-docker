import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import ForgetPasswordPage from '../../../pages/ForgetPasswordPage';


const forgetPasswordPage = new ForgetPasswordPage();


Given('I open Forget Password Page', () => {

  forgetPasswordPage.visitForgetPasswordPage();

});

 

When('I fill the username input with {string}', (forgetUsername) => {

  forgetPasswordPage.typeUsername(forgetUsername);

});

 

When('I click on Submit button', () => {

  forgetPasswordPage.clickSubmit();

});

 

Then('I see {string} message', (expected) => {

  const message = forgetPasswordPage.getMessage();

});