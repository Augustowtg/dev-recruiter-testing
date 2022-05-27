/// <reference types="cypress" />

describe('Exemplo', () =>{
    beforeEach(() => {
        cy.visit("http://localhost:4200/")
    })
    it("have a title", () => {
        cy.get('.mat-display-2').first().should('have.text', 'Originação de crédito imobiliário com Inteligência Artificial')
    })
    it('Click login', () => {
        cy.get('nav-link').contains('ENTRAR')
    })
})