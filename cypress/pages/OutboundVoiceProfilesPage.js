import Pages from './Pages'
const buttonAddNewProfile = '[data-testid="title-container"] button'
const inputOutboundVoiceProfileName = 'input[name="name"]'
const buttonCreate = 'button[type="submit"]'
const buttonEditProfileFirst = 'tbody tr:first-child td:last-child button:first-child'
const buttonSave = "button[type='submit']"
const deleteFirstApp = 'tbody tr:first-child td:last-child button:last-child'
const confirmDelete = '[type="button"]+[type="button"]'
class ProgrammableVoicePage extends Pages{
    clickButtonAddNewProfile(){
        cy.get(buttonAddNewProfile).click()
    }
    fillInputOutboundVoiceProfileName(name){
        cy.get(inputOutboundVoiceProfileName).type(name)
    }
    clickButtonCreate(){
        cy.get(buttonCreate).click()
    }
    clickButtonEditProfileFirst(){
        cy.get(buttonEditProfileFirst).click()
    }
    clickButtonSave(){
        cy.get(buttonSave).click()
    }
    clickDeleteFirstApp(){
        cy.get(deleteFirstApp).click()
    }
    clickConfirmDelete(){
        cy.get(confirmDelete).click()
    }

}
export default new  ProgrammableVoicePage()