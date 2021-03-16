/// <reference types="Cypress" />

describe('My Second Test Suite', function() 
{
 
it('Add To Cart',function() {
 
 
cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
cy.get('.search-keyword').type('ca')
cy.wait(2000)

 
//Parent child chaining
cy.get('.products').as('productLocator')
//cy.get('.products .product')
cy.get('.brand').then(function(logoelement)
{
    
    var text =logoelement.text()
    cy.log(text)
    function callBack() {
      return new Cypress.Promise((resolve, reject)=> {
            
           if(text.includes('GREENKART')){
               resolve('succesfull match')
           }
           else{
               reject('failed')
           }
           
        })
    }
        callBack().then((message)=>{
          cy.log('this is in then '+message)
        }).catch((error)=>{
            cy.log('this is in catch '+ error)
        })
    

})


cy.get('@productLocator').find('.product').each(($el, index, $list) => {
 
const textVeg=$el.find('h4.product-name').text()
if(textVeg.includes('Cashews'))
{
$el.find('button').click()
}
})
cy.get('.cart-icon > img').click()
//cy.contains('PROCEED TO CHECKOUT').click()
 
})
})
 
 
 