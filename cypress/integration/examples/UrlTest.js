  /// <reference types="Cypress" />



describe('My First Test Suite',function(){

  before(function(){
   cy.fixture('example').then(function(data){
     this.data=data
   })
  })
    it('My First Test Case',function(){
       cy.visit("https://demo.actitime.com/login.do")
       cy.title().should('contains','actiTIME')
       cy.get('input[name="username"]').type(this.data.usr)
       cy.get('input[name="pwd"]').type(this.data.pswrd)
       // cy.get('#loginButton').click()
       cy.server()
       cy.route('Post','https://demo.actitime.com/rpc').as('resp')
       cy.contains('Login ').click()

       cy.wait('@resp').its('status').should('eq',200)

       cy.get('@resp').should((xhr)=>{

           //  expect(xhr.status).to.equal(200)
           //expect(xhr).to.have.property('status', 200)
                expect(xhr.responseBody).to.have.property('id',2)
                expect(xhr.responseHeaders).to.have.property('content-type','application/json;charset=UTF-8')
       })


       cy.title().should('contains','actiTIME - Enter Time-Track')
       
    })
})