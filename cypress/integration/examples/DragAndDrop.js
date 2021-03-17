 /// <reference types="Cypress" />



 describe('Drag And Drop',function(){

    

      it('Drag And Drop',function(){
         cy.visit("https://www.seleniumeasy.com/test/drag-and-drop-demo.html")
         cy.server()
            cy.route('Post','https://www.google-analytics.com/j/collect?v=1&_v=j88&a=949623025&t=pageview&_s=1&dl=https://www.seleniumeasy.com/test/drag-and-drop-demo.html&ul=en-us&de=UTF-8&dt=Selenium').as('resp')
         
          .its('status').should('eq',200)
          
        //   cy.get('@resp').should((xhr)=>{

            
        //     expect(xhr.responseBody).to.have.property('content-type','text/plain')
        // })
          cy.get("#todrag>span:nth-child(2)").drag('#mydropzone')

          cy.xpath("//div[@id='todrag']/span[2]").drag('#mydropzone')

          cy.contains('Date pickers').click()

          cy.contains('Bootstrap Date Picker').click()
           cy.get('input[placeholder="dd/mm/yyyy"]').click()

           cy.xpath('(//th[@class="datepicker-switch"])[1]').click()
           cy.xpath('(//th[@class="datepicker-switch"])[2]').click()
            cy.wait(3000)
    
            for(let i=0;i<=2;i++){
                cy.xpath('(//th[@class="prev"])[3]').click({force: true})
            }

           cy.get("div[class*='datepicker-dropdown']>div:nth-child(3) td>span").each(($e1, index, $list)=>{
            var text= $e1.text()
            if(text=='1995'){
                cy.wrap($e1).click({force: true})
            }
        })
          cy.get("div[class*='datepicker-dropdown']>div:nth-child(2) td>span").each(($e1, index, $list)=>{
              var text= $e1.text()
              if(text=='Oct'){
                  cy.wrap($e1).click({force: true})
              }
          })
                
                //.datepicker-days tbody>tr td
          cy.get(".datepicker-days tbody>tr:nth-child(5) td").each(($e1, index, $list)=>{
            var text= $e1.text()
            if(text=='25'){
                cy.wrap($e1).click()
            }
        })
         
         })
  
  
     
         
      })
  