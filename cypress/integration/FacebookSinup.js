  /// <reference types="Cypress" />


  describe('My First Test Suite',function(){
      beforeEach(function(){
        cy.visit("https://en-gb.facebook.com/")
      })
    it('Facebook Sinup',function(){

        cy.contains('Sign Up').click()
       cy.get('[name="firstname"]').type('sarthak')
       cy.get('[name="lastname"]').type('choudhary')
       cy.get('[aria-label="Mobile number or email address"]').type('7417377674')
       cy.get('[data-type="password"]').type('test212@')
       cy.get('[aria-label="Day"]').select('25').should('have.value','25')
       cy.get('[aria-label="Month"]').select('Oct').should('have.value','10')
       cy.get('[aria-label="Year"]').select('1995').should('have.value','1995')
       cy.get('[type="radio"]').eq(1).check().should('be.checked')
       
    })
})