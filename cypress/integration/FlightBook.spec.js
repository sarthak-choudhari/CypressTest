/// <reference types="Cypress" />

import FlightBook from "../pageObject/FlightBook.page"



  describe('Test Suite',function(){

    before(function(){
        cy.visit('https://paytm.com/flights')
      
    })
   
    beforeEach(function(){
        cy.fixture('example').then(function(data)
        {
           this.data=data
           
        })
       
    })

   

   it('Paytm Flight Booking',function(){
     const fb=new FlightBook()
    // cy.wait(3000)

     cy.server()

     cy.route('GET','https://storefront.paytm.com/v1/mobile/flyouts').should((xhr)=>{
      expect(xhr).to.have.property('status', 200)
     // expect(xhr.responseheaders).to.have.property('content-type','application/json; charset=utf-8')
   })

     fb.fromFlightFiled('Mumbai','BOM')

     fb.toFlightFiled('delhi','DEL')

     fb.departureDate('29')

    // fb.returnDate('5')

    fb.searchFlight()

    fb.nonStopCheckBox()

    fb.selectFlight('SG - 8158').click({force: true})
     
   })
  })