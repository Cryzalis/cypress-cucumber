import Pages from './Pages'
const checkBox = 'div i'
const inputWebHookUrl = '#webhook_url'
const buttonStartWhatsApp = 'header~div button[type="button"]'

class ProgrammableVoicePage extends Pages{
    clickCheckbox(){
        cy.get(checkBox).click()
    }
    fillInputWebHookUrl(url){
        cy.get(inputWebHookUrl).type(url)
    }
    clickButtonStartWhatsApp(){
        cy.get(buttonStartWhatsApp).click()
    }

}
export default new ProgrammableVoicePage()