/// <reference types="Cypress" />
describe('Launch my app',()=>{
    it('Testing picture uploading', () => {
        cy.visit('https://the-internet.herokuapp.com/upload')
        const fileName = 'example.json'
        cy.fixture('example.json').then(function(fileContent)
        {
          cy.get('#file-upload').attachFile({fileContent,fileName,mimeType:'application/json'})
          cy.get('#file-submit').click()
    })
    })
    })