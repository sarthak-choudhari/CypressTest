/// <reference types="Cypress" />
/// <reference types="Cypress-iframe" />
import 'cypress-iframe'


describe('Iframe', function() 
{
 
it('Iframe',function() {

cy.visit("https://the-internet.herokuapp.com/iframe")

 
  cy.frameLoaded('#mce_0_ifr')

cy.iframe().find('p').clear()
 cy.iframe().find('p').type('hahhah')
 


})
 
 
})