import Pages from './Pages'
const buttonAddNewApp = 'Add new App'
const inputAppName = 'input[name="application_name"]'
const inputUrl = 'input[name="webhook_event_url"]'
const buttonSave = 'button[type="submit"]'
const editLastApp = 'tbody tr:last-child td:last-child button:first-child'
const deleteFirstApp = 'tbody tr:first-child td:last-child button:last-child'
const confirmDelete = '[type="button"]+[type="button"]'
class ProgrammableVoicePage extends Pages{
    clickButtonAddNewApp(){
        cy.get('button').contains(buttonAddNewApp).click()
    }
    fillInputAppName(appName){
        cy.get(inputAppName).type(appName)
    }
    fillInputUrl(url){
        cy.get(inputUrl).type(url)
    }
    clickSave(){
        cy.get(buttonSave).click()
    }
    clickEditLastApp(){
        cy.get(editLastApp).click()
    }
    clickDeleteLastApp(){
        cy.get(deleteFirstApp).click()
    }
    clickConfirmDelete(){
        cy.get(confirmDelete).click()
    }
}
export default new  ProgrammableVoicePage()