import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  import HomePage from '../../pages/HomePage'
  import DashboardMenu from '../../pages/DashboardMenu'

  
  Given("A web browser is at the loged in", () => {
    cy.login('dmytromaslo@gmail.com','123456789!Pp')
  });
  Given("A web browser is at the home page", () => {
    cy.visit('/#/app/home')
  });
  
  When("A user click to Cart and add SIM to cart", () => {
   
    DashboardMenu.clickLinkHome()
    HomePage.clickButtonCart()
    HomePage.clickAddSIMtoCart()
  });
  
  Then("SIM added to Order", () => {
    cy.get('section+section tbody ').find('tr').should('have.length', 1)
  });
