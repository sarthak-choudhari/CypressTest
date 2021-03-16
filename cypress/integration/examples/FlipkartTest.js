  /// <reference types="Cypress" />
describe('My First Test Suite',function(){
    it('My First Test Case',function(){
        cy.visit("https://www.flipkart.com/");
        cy.get('input[type="text"]').type('iphone 12')
        cy.get('button[type="submit"]').click()
       // cy.get('[class="_1fQZEK"]').eq(1).invoke('removeAttr','target').click()
      
       // cy.contains('APPLE iPhone 12 (Blue, 128 GB)').invoke('removeAttr','target')
        cy.xpath("//div[contains(text(),'APPLE iPhone 12 (Blue, 128 GB)')]/ancestor::a").invoke('removeAttr','target').click()
      //   cy.wait(3000)
      //   cy.get('._1bh0RH > ._2KpZ6l').scrollIntoView()
      //  cy.xpath('//li/button').click({force:true})
      cy.scrollTo('bottom')
        cy.get('button[class="_2KpZ6l _1t_O3S _2ti6Tf _3AWRsL"]').click({force:true})

        
        
      })
    })