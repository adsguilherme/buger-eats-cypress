var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {
  
  deliver: function () {

    var firstName = faker.name.firstName()
    var lastName = faker.name.lastName()

    let data =  {
      name: `${firstName} ${lastName}`, 
      cpf: cpf.generate(),
      email: faker.internet.email(firstName),
      whatsapp: '44999999999',
      address: {
        postalcode: '04534011',
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

    return data

  }
}

// Método delivery que está dentro do módulo SignupFactory.js vai devolver uma massa de teste completa. 