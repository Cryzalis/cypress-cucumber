import Pages from './Pages'
const profiles = 'tbody tr'
const addProfile = '[data-testid="add-messaging-profile-button"]'
const inputProfile = '[placeholder="Name of the messaging profile"]'
const buttonSave = 'Save'
class ProgrammableMessagingPage extends Pages{
    clickAddNewprofile(){
        cy.get(addProfile).click()
    }
    fillProfile(profileName){
        cy.get(inputProfile).type(profileName)
    }
    clickSave(){
        cy.get('button').contains(buttonSave).click()
    }
}
export default new  ProgrammableMessagingPage()