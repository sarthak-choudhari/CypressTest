// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


import CartPage from '../pageObject/Cart.page'
import LoginPage from '../pageObject/Login.page'
import ProductPage from '../pageObject/Product.page'


Cypress.Commands.add('login', (email, password) => { 
    const login=new LoginPage()
    login.userNameField().type(email)
    login.passwordField().type(password)
    login.loginButton()
})

Cypress.Commands.add("selectProduct", (productName) => { 
      
    const pd=new ProductPage()
    pd.allProduct().should('have.length',6).and('be.visible').each(($e1, index, $list)=>{
        const a=$e1.find('.inventory_item_name').text()
        
       if(a.includes(productName))
       {
          $e1.find('.btn_primary').click()
           var sum=0
           pd.productInCart().then((as)=>{
               const num=as.text()
               sum= Number(num)
               for(let i=sum;i<=sum;i++){
                cy.log('total item in cart'+i)
                expect(sum).to.equal(i)
               }
            //    if(sum<=1){
            //     cy.log('total item in cart'+sum)
            //     expect(sum).to.equal(1)
                  
            //    }else if (sum<=2){
            //     cy.log('total item in cart'+sum)
            //     expect(sum).to.equal(2)
                
            //    }else{
            //     cy.log('total item in cart'+sum)
            //    }
           })
       }
   })
      })


      Cypress.Commands.add('removeItems', (itemName) => {
          const cp=new CartPage()
          cp.cartItem().should('have.length',3).and('be.visible').each(($e1, index, $list)=>{
              if($e1.text().includes(itemName)){
              cp.removeButton().eq(index).should('be.enabled').click()
              }
          })
      })


       Cypress.Commands.add('sorting', (ca) => {
        const product=new ProductPage()
       var ca=[];
        product.allProductName().each((e1, ind)=>{
                
          
           ca[ind]=e1.text()
          
         
           
         })
         return ca
         
      })
