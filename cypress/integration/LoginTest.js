/// <reference types="Cypress" />
import LoginPage from '../pageObject/LoginPage'


describe('Login Page', function() 
{

   

      beforeEach(function(){
        cy.visit(Cypress.env('url'))
        cy.fixture('example').then(function(data)
        {
           this.data=data
        })
      })
      var login=new LoginPage()

      it('UserName Validation ',function() {
       
       
    
       login.userNameField()
       login.passwordField().type(this.data.Password)
       login.loginButton()
       login.notificationError().then((error)=>{
        let actualText=error.text()
       expect(actualText.includes("Username is required")).to.be.true
    })
    })

    it('Password Validation ',function() {
        
       
    
       login.userNameField().type(this.data.name)
       login.passwordField()
       login.loginButton()
       login.notificationError().then((error)=>{
        let actualText=error.text()
       expect(actualText.includes("Password is required")).to.be.true
    })
})

      it('Invalid credentials ',function() {
       
       
     
        login.userNameField().type('aserfgy')
        login.passwordField().type('123adst')
        login.loginButton()
        login.notificationError().then((error)=>{
            let actualText=error.text()
           expect(actualText.includes("Username and password do not match any user in this service")).to.be.true
        })
     })


     it('Stander_user Login ',function() {
   
   

   cy.login(Cypress.env('name'),this.data.Password)
   
   
})
})

