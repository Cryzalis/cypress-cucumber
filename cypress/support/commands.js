Cypress.Commands.add('customCommand', (one, two, ...args) => {
    cy.log('this is message from cy custom command');
    cy.log(one);
    cy.log(two);
    args.forEach((arg) => {
        cy.log(arg);
    });
});
const inputEmail = "form[aria-label='loginForm']  input[name='email']"
const inputPassword = "form[aria-label='loginForm']  input[name='password']"
const buttonLogin = "form[aria-label='loginForm']  button"
Cypress.Commands.add('login', (email, password) => {
    cy.session([email, password], () => {
      cy.visit('/#/login/sign-in')
      cy.get(inputEmail).clear().type(email,{ force: true})
      cy.get(inputPassword).clear().type(password,{ force: true})
      cy.get(buttonLogin).click({ force: true})
      cy.url({timeout:20000}).should("contains", "#/app/")
    })
  })
