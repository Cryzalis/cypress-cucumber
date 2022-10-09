import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  import ProgrammableMessagingPage from '../../pages/ProgrammableMessagingPage'
  import DashboardMenu from '../../pages/DashboardMenu'
  let profiles
  Given("A web browser is at the Programmable Messaging page", () => {
    cy.visit('/#/app/home')
    DashboardMenu.clicklinkProgrammableMessaging()
  });
  When("A user click create Profile and save it", () => {
    ProgrammableMessagingPage.clickAddNewprofile()
    ProgrammableMessagingPage.fillProfile('Some Name')
    ProgrammableMessagingPage.clickSave()
  });
  
  Then("new profile added to list", () => {
    cy.get('tbody tr:first-child td:nth-child(2)').should('have.text','Some Name')
  });
