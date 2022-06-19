/// <reference types="Cypress" />

describe('My First Test Suite',function(){
   
    it('My first TestCase',function(){
     cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
     cy.get('.search-keyword').type('ca')
     cy.get('.product:visible').should('have.length',4)
    })
    
})