// No Describe, o 'Home Page' é o nome da SUÍTE DE TESTE
// No it, 'App deve estar online', é o CASO DE TESTE 

describe('Home Page', () => {
  it('App deve estar online', () => {
    cy.viewport(1920, 1080)
    cy.visit('https://buger-eats.vercel.app')
    cy.get('#page-home main h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats') // .should é uma sub-função. E 'have.text' é uma propriedade
  })
})