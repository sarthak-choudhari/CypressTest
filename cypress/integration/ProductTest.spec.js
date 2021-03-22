/// <reference types="Cypress" />

  import CartPage from '../pageObject/Cart.page'
import LoginPage from '../pageObject/Login.page'
import ProductPage from '../pageObject/Product.page'

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

    var bagPrice=0
    var tprice=0
    

   it('product add',function(){
    
    
    const product= new ProductPage()
   cy.login(Cypress.env('name'),this.data.Password)

    cy.title().should('contains','Swag Labs')


     //apply before sorting
     var ca=[];
     product.allProductName().each((e1, ind)=>{
             
       
        ca[ind]=e1.text()
      
        
      }).then(()=>{
       ca.sort()
       cy.log(ca.reverse())
       
      })

      // apply after sorting
     product.filterDropdown().select('za').should('have.value','za')

       var b=[];
      
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
       product.bagItemPrice().then((bag)=>{
        const amount=bag.text()

         const res= amount.replace(/[&\/\\#,+()$~%'":*?<>{}]/g, '');
        
        bagPrice=Number(res)
       cy.log(bagPrice)
        
       })
       product.tshirtPrice().then((tshirt)=>{
            const amount=tshirt.text() 
            const res= amount.replace(/[&\/\\#,+()$~%'":*?<>{}]/g, '');
            tprice=Number(res)
            cy.log(tprice)

       })
       product.productInCart().click()
  })

  it('Cart Product',function(){

    const cp=new CartPage()
    
    
    cy.removeItems('Sauce Labs Fleece Jacket')

    cp.cartItem().should('have.length',2)

    cp.contiuneShopping()
   
    
          cp.itemPrice().each(($e1, index, $list)=>{
           const a=$e1.text()
           const b=Number(a)
           if(b==bagPrice){
            expect(b).to.equal(bagPrice)
           } 
           else if(b==tprice){
            expect(b).to.equal(tprice)
           }
          })

          cp.checkoutButton().should('be.visible')
        
      })
})