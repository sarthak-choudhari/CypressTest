  /// <reference types="Cypress" />


  describe('My First Test Suite',function(){
    beforeEach(function(){
      cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    })
  it('Alert',function(){
    cy.on('window:confirm',function(str)
    {
        //Mocha
      //  expect(str).to.equal('Hello , Are you sure you want to confirm?')
       return false
    })
    cy.contains('Click for JS Confirm').click()
     
  })
})