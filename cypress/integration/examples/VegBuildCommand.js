  /// <reference types="Cypress" />


  describe('My First Test Suite',function(){
    beforeEach(function(){
      cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    })
  it('each',function(){

      cy.wait(3000)
   cy.selectProduct('Brocolli - 1 Kg')
   cy.wait(3000)
   cy.selectProduct('Carrot - 1 Kg')
   cy.get('a.cart-icon img').click()
  })
  })