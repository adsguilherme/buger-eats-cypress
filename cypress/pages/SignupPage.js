/*
SignupPage é a classe
go é a função
*/

class SignupPage {
  go(){
    //cy.viewport(1440, 900)
    cy.visit('/')
    cy.get('a[href="/deliver"]').click()
    cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')
  }

  fillForm(deliver) { // fillForm recebe uma massa de teste como argumento (deliver)
    cy.get('input[name="fullName"]').type(deliver.name)
    cy.get('input[name="cpf"]').type(deliver.cpf)
    cy.get('input[name="email"]').type(deliver.email)
    cy.get('input[name="whatsapp"]').type(deliver.whatsapp)
    
    cy.get('input[name="postalcode"]').type(deliver.address.postalcode)
    cy.get('input[type="button"][value="Buscar CEP"]').click()
    
    cy.get('input[name="address-number"]').type(deliver.address.number)
    cy.get('input[name="address-details"]').type(deliver.address.details)

    // Validando busca de cep dos campos que são gerados automaticamente
    cy.get('input[name=address]').should('have.value', deliver.address.street)
    cy.get('input[name=district]').should('have.value', deliver.address.district)
    cy.get('input[name=city-uf]').should('have.value', deliver.address.city_state)

    // Função contains: juntar um localizador css de busca com texto
    cy.contains('.delivery-method li', deliver.delivery_method).click()

    // npm install cypress-file-upload --save-dev

    /* Em support temos 2 arquivos:

    Index.js
    Commands.js

    O arquivo index ele importa o arquivo commands. E todos os comandos (custom commands) iremos escrever dentro de commands.

    Agora arquivos de bibliotecas (import), adicionamos no arquivo index.js.

    */

    cy.get('input[accept^="image"]').attachFile('/images/' + deliver.cnh)

  }

  submit() {
    cy.get('button[type="submit"]').click()
  }

  modalContentShouldBe(expectedMessage) {
    cy.get('.swal2-container div[class="swal2-html-container"]')
      .should('have.text', expectedMessage)
  }

  alertMessageShouldBe(expectedMessage) {
    //cy.get('.alert-error').should('have.text', expectedMessage)
    cy.contains('.alert-error', expectedMessage).should('be.visible')
  }

}

export default new SignupPage;