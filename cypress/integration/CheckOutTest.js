/// <reference types="Cypress" />

import CartPage from '../pageObject/CartPage'
import ProductPage from '../pageObject/ProductPage'
import CheckOutPage from '../pageObject/CheckOutPage'

  describe('Test Suite',function(){
    before(function(){
      cy.visit(Cypress.env('url'))
      
    })
   
    beforeEach(function(){
        cy.fixture('example').then(function(data)
        {
           this.data=data
           
        })
       
    })

   

   it('Sorting Product validation',function(){
       const product=new ProductPage()
       const cp=new CartPage()
       const out=new CheckOutPage()
      
    cy.login(Cypress.env('name'),this.data.Password)
   
    //apply before sorting
    var ca=[];
    product.allProductName().each((e1, ind)=>{
            
      
       ca[ind]=e1.text()
      
     
       
     }).then(()=>{
      ca.sort()
      cy.log(ca.reverse())
      
     })
    product.filterDropdown().select('za').should('have.value','za')
      var b=[];
     // apply after sorting
    // var a=["Test.allTheThings() T-Shirt (Red)", "Sauce Labs Onesie", "Sauce Labs Fleece Jacket", "Sauce Labs Bolt T-Shirt", "Sauce Labs Bike Light", "Sauce Labs Backpack"]
    product.allProductName().each(($e1, index)=>{

     
      b[index]=$e1.text()
      
    
    
      
    }).then(()=>{
      //verify sorting items 
     expect(ca).to.deep.equal(b)
     
    })
    // fetching price items before filter 
    var price=[]
    product.itemPrice().each(($e1, index)=>{
      const amount=$e1.text()

         const res= amount.replace(/[&\/\\#,+()$~%'":*?<>{}]/g, '');
        
        price[index]=Number(res)
    }).then(()=>{
      cy.log(price)
    })

      //fetching price item after lowToHigh filter
    product.filterDropdown().select('lohi').should('have.value','lohi')

    var lowToHigh=[]
    product.itemPrice().each(($e1, index)=>{
      const amount=$e1.text()

         const res= amount.replace(/[&\/\\#,+()$~%'":*?<>{}]/g, '');
        
        lowToHigh[index]=Number(res)
    }).then(()=>{
      //verify price item lowToHigh
      expect(price.sort(function(a,b){return a-b})).to.deep.equal(lowToHigh)
    })

    product.filterDropdown().select('hilo').should('have.value','hilo')

    //fetching price item after hightToLow filter
    var highToLow =[]
    product.itemPrice().each(($e1, index)=>{
      const amount=$e1.text()

         const res= amount.replace(/[&\/\\#,+()$~%'":*?<>{}]/g, '');
        
        highToLow[index]=Number(res)
    }).then(()=>{
      // //verify price item highToLow
      expect(price.reverse()).to.deep.equal(highToLow)
    })
    
  
    this.data.Product.forEach(function(el) {
    
        cy.selectProduct(el)
      })
      product.productInCart().click()
      cp.checkoutButton().should('be.visible').click()
  


      //Validate Checkout FirstName Field
      
      out.nameField().type('Test')
      out.lastName()
      out.continueButton()
      out.errorMessage().then((as)=>{

        let actualText=as.text()
        expect(actualText.includes("Last Name is required")).to.be.true
      })
    
       //Validate Checkout LastName Field
   
      out.nameField().clear()
      out.lastName().type('Test')
      out.continueButton()
      out.errorMessage().then((as)=>{

        let actualText=as.text()
        expect(actualText.includes("First Name is required")).to.be.true

      })
        // Validate Checkout zipcode Field
   
      out.nameField().type('Testing')
      out.continueButton()
      out.errorMessage().then((as)=>{

        let actualText=as.text()
        expect(actualText.includes("Postal Code is required")).to.be.true
      })

      //valid checkou field
      out.nameField().clear().type('Test')
      out.lastName().clear().type('Testing')
     out.postalCodeField().type('247762')
      out.continueButton()

      out.cancel()
      out.finish().click()
      out.successMessage().then((as)=>{
        
        let actualText=as.text()
        expect(actualText.includes("THANK YOU FOR YOUR ORDER")).to.be.true
      })
      
    })

})