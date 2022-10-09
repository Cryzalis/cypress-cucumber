import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  import WhatsAppBusinessPage from '../../pages/WhatsAppBusinessPage'
  let app = {
    url:'http://test.com',
    error:'You need to be L2 verified to signup for WhatsApp'
  }

  Given("A web browser is at the WhatsApp Business page", () => {
    cy.visit('/#/app/messaging-new/whatsapp/new')
  });
  
  When("A user go to WhatsApp Business click to checkBox fill url and click start WhatsApp", () => {
    WhatsAppBusinessPage.clickCheckbox()
    WhatsAppBusinessPage.fillInputWebHookUrl(app.url)
    WhatsAppBusinessPage.clickButtonStartWhatsApp()
  });
  
  Then("WhatsApp Sign-up not started error message is visible", () => {
    cy.get('div[type="error"] div[type="error"]').should('be.visible').should('contain.text', app.error)
  });
  