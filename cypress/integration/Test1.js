/// <reference types="Cypress" />

describe('My First Test Suite',function(){
   
    it('My first TestCase',function(){
     cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
     cy.get('.search-keyword').type('ca')
     cy.get('.product:visible').should('have.length',4)
    })

    it('My Second TestCase',function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.log("second test case")
       })

       it('My third TestCase from X person',function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.log("My third TestCase from X person")
       })
})