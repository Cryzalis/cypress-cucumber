import Pages from './Pages'
const buttonAddSIPConnection = 'Add SIP Connection'
const inputConnectionName = '#name'
const buttonCreateSIPConnection = '.modal-dialog span button'
const buttonSave = '.modal-dialog button.btn-primary.loader-button'
const buttonDeleteLastConnection = 'tbody tr:last-child button[e2e="deleteConnection"]'
const confirmDelete = '.modal-dialog button.btn-primary'
const inputConnectionNameLast = 'tbody tr:last-child td:nth-child(2) input'
const placeForClick = '.m-3 button:first-child'
const successMessage = 'div[type="success"]'

class SIPTrunkingPage extends Pages{
    clickButtonAddSIPConnection(){
        cy.get('button').contains(buttonAddSIPConnection).click()
    }
    fillInputConnectionName(name){
        cy.get(inputConnectionName).type(name)
    }
    clickButtonCreateSIPConnection(){
        cy.get(buttonCreateSIPConnection).click()
    }
    clickSave(){
        cy.get(buttonSave).click()
    }
    clickButtonDeleteLastConnection(){
        cy.get(buttonDeleteLastConnection).click()
    }
    clickConfirmDelete(){
        cy.get(confirmDelete).click()
    }
    editConnectionNameLast(){
        cy.get(inputConnectionNameLast).type('edited')
    }
    clickForSaveEdit(){
        cy.get(placeForClick).click()
    }
}
export default  new SIPTrunkingPage()