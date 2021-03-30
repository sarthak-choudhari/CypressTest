/// <reference types="Cypress" />


import HomePage from "../pageObject/MyStoreHome.page"
describe('My First Test Suite',function(){

  before(function(){
    cy.visit('http://automationpractice.com/')
  
})

beforeEach(function(){
 
  cy.fixture('example').then(function(data)
  {
     this.data=data
  })
})

    it('My Store Home',function(){

    const hom=new HomePage()

   cy.login(this.data.MyStoreName ,this.data.MyStorePassword)
    hom.WomenToolTip()
    hom.Tshrit()
    
      cy.compareSnapshot('product', 0.0);
     cy.compareSnapshot('product', 0.1);

    
    //  cy.compareSnapshot('Tshirt', {
    //   capture: 'fullPage',
    //   errorThreshold: 0.1
    // });
        
      })
      
    })