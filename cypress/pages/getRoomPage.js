// Variables for element locator
const place = "#label-placeholder";
const checkin = "date-from";
const checkout = "date-to";
const search = "#s_search";

class HomePage {

    getHomePage(){
        return cy.visit("/");
    }

    getPlace(){
        return cy.get("#label-placeholder");
    }

    getCheckIn(){
        return cy.get("date-from");
    }

    getCheckOut(){
        return cy.get("datecheckout");
    }

    getSearch(){
        return cy.get("#s_search");
    }

  }
    
export default HomePage