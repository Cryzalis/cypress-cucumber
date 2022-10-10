import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  import ProgrammableVoicePage from '../../pages/ProgrammableVoicePage'
  let app = {
    name:'new test app',
    url:'http://test.com'
  }

  Given("A web browser is at the Programmable Voice page", () => {
    cy.visit('/#/app/call-control/applications')
  });
  
  When("A user go to Programmable Voice click  add new app and fill inputs and click save", () => {
    
    ProgrammableVoicePage.clickButtonAddNewApp()
    ProgrammableVoicePage.fillInputAppName(app.name)
    ProgrammableVoicePage.fillInputUrl(app.url)
    ProgrammableVoicePage.clickSave()
  });
  When("A user click edit for last app change app name and click save", () => {
    ProgrammableVoicePage.clickEditLastApp()
    ProgrammableVoicePage.fillInputAppName('edit')
    ProgrammableVoicePage.clickSave()
  });
  When("A user click delete for first app", () => {
    ProgrammableVoicePage.clickDeleteLastApp()
    ProgrammableVoicePage.clickConfirmDelete()
  });
  Then("App added to list and displayed correctly", () => {
    cy.get('tbody tr:first-child td:nth-child(2)').should('have.text',app.name)
  });
  Then("App not added to list error message is visible", () => {
    cy.get('div[type="error"] div[type="error"]').should('be.visible').should('contain.text', 'has already been taken')
  });
  Then("Edit Voice app Success message is visible", () => {
    cy.get('div[type="success"] div[type="success"]').should('be.visible').should('contain.text', 'Updated Voice API Application:')
  });
  Then("Voice App deleted from list", () => {
    cy.get('tbody tr',{timeout:9000}).should('have.length','1')
  });
  