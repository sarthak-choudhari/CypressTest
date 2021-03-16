/// <reference types="Cypress" />
 
describe('My Second Test Suite', function() 
{
 
it('Dropdownlist',function() {
 
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
 
//Static Dropdown
 
cy.get('select').select('option2').should('have.value','option2')
 
//Dynamic dropdowns
cy.get('#autocomplete').type('ind')
 
cy.get('.ui-menu-item div').each(($e1, index, $list) => {
 
    if($e1.text()==="India")
    {
        $e1.click()
    }
 
 
})
//autocomplete
cy.get('#autocomplete').should('have.value','India')
}  )
 
 
 
}  )