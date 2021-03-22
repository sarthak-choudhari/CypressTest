class CheckOutPage{
    nameField(){
        return cy.get('#first-name').should('be.visible')
    }
    lastName(){
        return cy.get('#last-name').should('be.visible')
    }
    postalCodeField(){
        return cy.get('#postal-code').should('be.visible')
    }
    continueButton(){
        return cy.get('.btn_primary.cart_button').should('be.enabled').click()
    }
    errorMessage(){
        return cy.get('[data-test="error"]')
    }
    cancel()
    {
        return cy.get('.cart_cancel_link.btn_secondary').should('be.visible')
    }
    finish()
    {
        return cy.get('.btn_action.cart_button').should('be.visible')
    }
    successMessage()
    {
        return  cy.get('.complete-header')
    }

}
export default CheckOutPage;