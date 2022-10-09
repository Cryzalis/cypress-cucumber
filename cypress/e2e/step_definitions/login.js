import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from '../../pages/LoginPage'

Given("A web browser is at the saucelabs login page", () => {
  cy.visit("/#/login/sign-in");
});

When("A user enters wrong the username {string}, the password {string}, and clicks on the login button", (username,password) => {
  LoginPage.login(username,password)
});

Then("the error message is visible", () => {
  LoginPage.checkError()
});

When("A user enters the username {string}, the password {string}, and clicks on the login button", (username,password) => {
  LoginPage.login(username,password)
});

Then("the url will contains the inventory subdirectory", () => {
  cy.url({timeout:13000}).should("contains", "#/app/");
});
