// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
const inputEmail = "form[aria-label='loginForm']  input[name='email']"
const inputPassword = "form[aria-label='loginForm']  input[name='password']"
const buttonLogin = "form[aria-label='loginForm']  button"
Cypress.Commands.add('login', (email, password) => {
    cy.session([email, password], () => {
      cy.visit('/#/login/sign-in')
      cy.get(inputEmail).clear().type(email,{ force: true})
      cy.get(inputPassword).clear().type(password,{ force: true})
      cy.get(buttonLogin).click({ force: true})
      cy.url({timeout:15000}).should("contains", "#/app/")
    })
  })