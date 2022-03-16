// Esse import é responsável para o funcionamento do modelo Page Objects. 
//import SignupPage from '../pages/SignupPage'


/*
No arquivo SignupPage.js foi alterado o export, ficando export default new SignupPage.
Dessa forma não precisa fazer uma instância da classe, como foi feito: let signup = new SignupPage().
Com isso já foi exportado como uma nova instância no arquivo SignupPage.js.
*/

import signup from '../pages/SignupPage'

import signupFactory from '../factories/SignupFactory'
import SignupPage from '../pages/SignupPage'

describe('Cadastro', () => {

  /* 
  A fixture que obtem a massa de teste, trabalha de forma assincrona, por conta disso devendo cumprir uma promessa (promisse).
  E com isso devemos usar a sub função then, que pega o resultado da promisse, no caso a sub função pegará o resultado da massa de teste.
  */

  /*
  beforeEach(() => {
    cy.fixture("deliver").then((d) => {
      this.deliver = d
    })
  })
  */

  /* 
  Com o uso de arrow function não tem como fazer o uso da variável de contexto, com o uso do this.
  E também devemos alterar nos 2 cenários de teste, usando a funcão convencional (function), no lugar de arrow function.
  */

  // O beforeEach foi comentado, pois agora deixamos de utilizar fixtures e passamos a utilizar factories.

  // beforeEach(function () {
  //   cy.fixture("deliver").then((massaDeDados) => {
  //     this.deliver = massaDeDados
  //   })
  // })

  /*
  before(function() {
    cy.log('Tudo aqui é executado uma única vez ANTES de TODOS os casos de testes')
  })
  
  
  beforeEach(function() {
    cy.log('Tudo aqui é executado sempre ANTES de CADA caso de teste')
  })

  after(function() {
    cy.log('Tudo aqui é executado uma única vez DEPOIS de TODOS os casos de testes')
  })
  
  
  afterEach(function() {
    cy.log('Tudo aqui é executado sempre DEPOIS de CADA caso de teste')
  })
  */

  it('Usuário deve se tornar um entregador', function () {
    /*
    cy.viewport(1440, 900)
    cy.visit('https://buger-eats.vercel.app')
    cy.get('a[href="/deliver"]').click()
    cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')
    */

    /*
    let deliver = {
      name: 'Guilherme Sousa', 
      cpf: '00000014141',
      email: 'guilherme@cy.com',
      whatsapp: '44999999999',
      address: {
        postalcode: '04534011',
        street: 'Rua Joaquim Floriano',
        number: '123',
        details: 'AP 123',
        district: 'Itaim Bibi',
        city_state: 'São Paulo/SP'
      },
      delivery_method: 'Moto',
      cnh:'cnh-digital.jpg'
    }
    */

    /*
    Para usar as funções que foram encapsuladas, que basicamente são os steps, basta instanciar a classe SignupPage.   

    Criando uma instância da classe SignupPage na variável signup. 
    Dessa forma signup terá acesso a todas as funções de SignupPage.
    
    let signup = new SignupPage()

    */

    var deliver = signupFactory.deliver()

    signup.go()

    //signup.fillForm(deliver)

    // signup.fillForm(this.deliver.signup)

    signup.fillForm(deliver)

    signup.submit()

    const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
    signup.modalContentShouldBe(expectedMessage)


    /*
    cy.get('input[name="name"]').type(deliver.name)
    cy.get('input[name="cpf"]').type(deliver.cpf)
    cy.get('input[name="email"]').type(deliver.email)
    cy.get('input[name="whatsapp"]').type(deliver.whatsapp)
    
    cy.get('input[name="postalcode"]').type(deliver.address.postalcode)
    cy.get('input[type="button"][value="Buscar CEP"]').click()
    
    cy.get('input[name="address-number"]').type(deliver.address.number)
    cy.get('input[name="address-details"]').type(deliver.address.details)

    // Validando busca de cep dps campos que são gerados automaticamente
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

    //cy.get('input[accept^="image"]').attachFile('/images/' + deliver.cnh)

    //cy.get('button[type="submit"]').click()

    //const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'

    /*
    cy.get('.swal2-container div[class="swal2-html-container"]')
      .should('have.text', expectedMessage)
    */

    cy.get('div .swal2-confirm').click()

  })

  it('CPF incorreto', function () {
    /*
    cy.viewport(1440, 900)
    cy.visit('https://buger-eats.vercel.app')
    cy.get('a[href="/deliver"]').click()
    cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')
    */

    /*
    let deliver = {
      name: 'Guilherme Sousa', 
      cpf: '00000014141-error',
      email: 'guilherme@cy.com',
      whatsapp: '44999999999',
      address: {
        postalcode: '04534011',
        street: 'Rua Joaquim Floriano',
        number: '123',
        details: 'AP 123',
        district: 'Itaim Bibi',
        city_state: 'São Paulo/SP'
      },
      delivery_method: 'Moto',
      cnh:'cnh-digital.jpg'
    }
    */

    //let signup = new SignupPage()

    var deliver = signupFactory.deliver()

    deliver.cpf = '00000000099xyz'

    signup.go()

    // signup.fillForm(deliver)

    signup.fillForm(deliver)

    //signup.fillForm(this.deliver.cpf_invalid)

    signup.submit()

    const expectedMessage = 'Oops! CPF inválido'
    signup.alertMessageShouldBe(expectedMessage)


    /*
    cy.get('input[name="name"]').type(deliver.name)
    cy.get('input[name="cpf"]').type(deliver.cpf)
    cy.get('input[name="email"]').type(deliver.email)
    cy.get('input[name="whatsapp"]').type(deliver.whatsapp)
    
    cy.get('input[name="postalcode"]').type(deliver.address.postalcode)
    cy.get('input[type="button"][value="Buscar CEP"]').click()
    
    cy.get('input[name="address-number"]').type(deliver.address.number)
    cy.get('input[name="address-details"]').type(deliver.address.details)

    // Validando busca de cep dps campos que são gerados automaticamente
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

    /*
    cy.get('input[accept^="image"]').attachFile('/images/' + deliver.cnh)

    cy.get('button[type="submit"]').click()
    */

    //cy.get('.alert-error').should('have.text', 'Oops! CPF inválido')

  })

  it('Email incorreto', function () {

    var deliver = signupFactory.deliver()

    deliver.email = 'user.com.br'

    signup.go()

    signup.fillForm(deliver)

    //signup.fillForm(this.deliver.email_invalid)

    signup.submit()

    const expectedMessage = 'Oops! Email com formato inválido.'
    signup.alertMessageShouldBe(expectedMessage)
  })

  context('Campos obrigatórios', function(){

      const messages = [

        { field: 'name', output: 'É necessário informar o nome' },
        { field: 'cpf', output: 'É necessário informar o CPF' },
        { field: 'email', output: 'É necessário informar o email' },
        { field: 'postalcode', output: 'É necessário informar o CEP' },
        { field: 'number', output: 'É necessário informar o número do endereço' },
        { field: 'delivery_method', output: 'Selecione o método de entrega' },
        { field: 'cnh', output: 'Adicione uma foto da sua CNH' }
      ]

      before(function() {
        SignupPage.go()
        SignupPage.submit()
      })

      // Realizando a chamada da constante messages, esta que é um array.
      // Sendo um array, realizar a chamada da função forEach, na qual vai percorrer pela lista de mensagens através de um loop.
      // E com isso, teremos apenas um IT (caso de teste), não precisando fazer 7 vezes. E dessa forma ao gerar erro nas validações, a execução não será abortada, e dará andamento nos demais cenários. 
      messages.forEach(function(msg){  
        it(`${msg.field} é obrigatório`, function(){
          SignupPage.alertMessageShouldBe(msg.output)
        })
      })
    })

    // Esse contexo que foi criado, elimina esse trecho de código de baixo.

    // it('Campos obrigatórios', function () {
    //   SignupPage.go()
    //   SignupPage.submit()

    //   SignupPage.alertMessageShouldBe('É necessário informar o nome')
    //   SignupPage.alertMessageShouldBe('É necessário informar o CPF')
    //   SignupPage.alertMessageShouldBe('É necessário informar o email')
    //   SignupPage.alertMessageShouldBe('É necessário informar o CEP')
    //   SignupPage.alertMessageShouldBe('É necessário informar o número do endereço')
    //   SignupPage.alertMessageShouldBe('Selecione o método de entrega')
    //   SignupPage.alertMessageShouldBe('Adicione uma foto da sua CNH')
    // })

})
