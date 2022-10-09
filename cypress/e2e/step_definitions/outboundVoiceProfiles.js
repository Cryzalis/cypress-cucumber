import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  import OutboundVoiceProfilesPage from '../../pages/OutboundVoiceProfilesPage'
  let profile = {
    name:'Outbound Voice app',
    successCreate:'Created Outbound Profile Successfully',
    error:'"Name": has already been taken',
    successEdit:'Updated Outbound Voice Profile'
  }

  Given("A web browser is at the Outbound Voice Profiles page", () => {
    cy.visit('/#/app/outbound-profiles')
  });
  
  When("A user click  add new profile fill inputs and click create", () => {
    OutboundVoiceProfilesPage.clickButtonAddNewProfile()
    OutboundVoiceProfilesPage.fillInputOutboundVoiceProfileName(profile.name)
    OutboundVoiceProfilesPage.clickButtonCreate()
  });
  When("A user click edit for first Outbound Voice Profile and change name", () => {
    OutboundVoiceProfilesPage.clickButtonEditProfileFirst()
    OutboundVoiceProfilesPage.fillInputOutboundVoiceProfileName('edit')
    OutboundVoiceProfilesPage.clickButtonSave()
  });
  When("A user click delete for first Outbound Voice Profile", () => {
    OutboundVoiceProfilesPage.clickDeleteFirstApp()
    OutboundVoiceProfilesPage.clickConfirmDelete()

  });

  

  Then("Outbound Voice Profile added to list and Success message is displayed", () => {
    cy.get('div[type="success"] div[type="success"]').should('be.visible').should('contain.text', profile.successCreate)
  });
  Then("Outbound Voice Profile edit Success message is displayed", () => {
    cy.get('div[type="success"] div[type="success"]').should('be.visible').should('contain.text', profile.successEdit)
  });
  Then("Outbound Voice Profile not added to list error message is visible", () => {
    cy.get('div[type="error"] div[type="error"]').should('be.visible').should('contain.text', profile.error)
  });
  Then("Outbound Voice Profile delete Success message is displayed", () => {
    cy.get('div[type="success"] div[type="success"]').should('be.visible')
  });