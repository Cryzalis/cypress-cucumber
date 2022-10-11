import Pages from './Pages'
const buttonCart = 'svg[data-icon="shopping-cart"]'
const addSIM = 'Add SIM to Cart'
class HomePage extends Pages{
    clickButtonCart(){
        cy.get(buttonCart).click()
    }
    clickAddSIMtoCart(){
        cy.get('button').contains(addSIM).click()
    }

}
export default new HomePage()