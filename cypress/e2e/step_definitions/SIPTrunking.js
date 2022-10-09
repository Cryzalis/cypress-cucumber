import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  import SIPTrunkingPage from '../../pages/SIPTrunkingPage'
  let connection = {
    name:'new test connection',
    error:'"Connection name": has already been taken.',
    success:'updated successfully'
  }

  Given("A web browser is at the SIP Trunking page", () => {
    cy.visit('/#/app/connections')
    cy.viewport(1600, 900) 
  });
  
  When("A user click Add SIP connection after fill connection name click create SIP connection and click save", () => {
    
    SIPTrunkingPage.clickButtonAddSIPConnection()
    SIPTrunkingPage.fillInputConnectionName(connection.name)
    SIPTrunkingPage.clickButtonCreateSIPConnection()
    SIPTrunkingPage.clickSave()
  });
  When("A user click Add SIP connection fill connection name as existing connection and click Create", () => {
    
    SIPTrunkingPage.clickButtonAddSIPConnection()
    SIPTrunkingPage.fillInputConnectionName(connection.name)
    SIPTrunkingPage.clickButtonCreateSIPConnection()
  });
  When("A user click delete connection for last connection", () => {
    
    SIPTrunkingPage.clickButtonDeleteLastConnection()
    SIPTrunkingPage.clickConfirmDelete()
  });
  When("A user edit last connection", () => {
    SIPTrunkingPage.editConnectionNameLast()
    SIPTrunkingPage.clickForSaveEdit()
  });
  Then("Connection deleted correctly", () => {
    cy.get('tbody tr').should('have.length', 1)

  });
  
  Then("Connection added to list and displayed correctly", () => {
    cy.get('tbody tr:last-child input').should('have.value', connection.name)

  });
  Then("Connection not added to list error message is displayed", () => {
    cy.get('div[type="danger"]').should('be.visible').should('contain.text', connection.error)
  });
  Then("Connection is edited message is displayed", () => {
    cy.get('div[type="success"]').should('be.visible').should('contain.text', connection.success)
  });
  
 