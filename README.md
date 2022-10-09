
# cypress-cucumber
Cypress 10+ with Cucumber boilerplate tests for [telynx.com](https://telnyx.com/).

### Contents
- [Technology](#Technology)
- [Usage](#Usage)
- [Requirements](#Requirements)
- [File structure](#file-structure)
- [Test structure](#test-structure)
- [POM file structure](#pom-file-structure)
- [Testing](#Testing)
- [Result](#Result)
- [To do](#to-do)

### Technology
- [Cypress](https://docs.cypress.io/)
- [cypress-cucumber-preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor)
- [cypress-esbuild-preprocessor](https://github.com/bahmutov/cypress-esbuild-preprocessor)
- [cucumber-html-reporter](https://www.npmjs.com/package/multiple-cucumber-html-reporter)
- [json-formatter](https://github.com/cucumber/json-formatter)

(+ bundlers: https://github.com/badeball/cypress-cucumber-preprocessor/tree/master/examples)

### Usage
- Download project
- Go to root folder
- Install the npm package with the command:

```
$ npm install
```

### Requirements
 :exclamation: To install and run the project, you need [NodeJS](https://nodejs.org/) v14+.

### File structure
- cypress    
    - e2e 
        - features
            - 1login.feature
            - dashboard.feature        
        - step_definitions
            - home.js
            - login.js
            - outboundVoiceProfiles.js
            - programmableMessaging.js
            - programmableVoice.js
            - SIPTrunking.js
            - whatsAppBusiness.js

    - fixtures  
    - pages  
        - DashboardMenu.js
        - HomePage.js
        - LoginPage.js
        - OutboundVoiceProfilesPage.js
        - Pages.js
        - ProgrammableMessagingPage.js
        - ProgrammableVoicePage.js
        - SIPTrunkingPage.js
        - WhatsAppBusinessPage.js
    - screenshots  
    - support  
    - videos

`e2e` folder contains feature files and step definitions
`pages` folder contains Page Object Model files

 ### Test structure
Cucumber uses a set of special keywords to give structure and meaning to executable specifications. Each keyword is translated to many spoken languages; in this reference we’ll use English. [official documentation](https://cucumber.io/docs/gherkin/reference/)
```feature
Feature: Dashboard
    Scenario: Add SIM to Cart
        Given A web browser is at the home page
        When A user click to Cart and add SIM to cart
        Then SIM added to Order
```
### POM file structure
Page Object Model (POM) is a design pattern, popularly used in test automation that creates Object Repository for web UI elements. The advantage of the model is that it reduces code duplication and improves test maintenance. Example below, for details use the [official documentation](https://docs.cypress.io/guides/end-to-end-testing/protractor-to-cypress#Cypress-with-Page-Objects)
```js
import Pages from './Pages'
const buttonAddNewProfile = 'Add New Profile'//CSS locators
const inputOutboundVoiceProfileName = 'input[name="name"]'
const buttonCreate = 'button[type="submit"]'

class ProgrammableVoicePage extends Pages{//Сlass title is the same as the page 
    clickButtonAddNewProfile(){//Method Title, some parameters 
        cy.get('button').contains(buttonAddNewProfile).click()
    }
```
### Testing
To run tests in the headless mod in the root directory, execute
```
npm run test
```
To open the cypress graphic interface
```
npm run cypress
```
### Result
If after completion test you  see something like this its means something wrong
![cypress cucumger result](https://github.com/Cryzalis/cypress-cucumber/blob/dev/cypress-cucumber-result.png)
### To Do
:heavy_check_mark: write 15 testcase

:white_large_square: rewrite everything