/// <reference types="Cypress" />
/// <reference types="Cypress-iframe" />
import 'cypress-iframe'


describe('Iframe', function() 
{
 
it('Iframe',function() {

cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

 //cy.frameLoaded('#courses-iframe')
  cy.frameLoaded('#courses-iframe')
 
 cy.iframe().contains('Mentorship').eq(0).click()
 cy.iframe().find("h1[class*='pricing-title']").should('have.length', 2)


})
 
 
})