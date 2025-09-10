let users = 
[
    {
      "id": 1,
      "nome": "João Silva",
      "email": "joao.silva@email.com",
      "telefone": "(11)98765-4321",
      "endereco": "Rua das Flores, 123, Jardim Botânico, São Paulo, SP, 01234-567",
      "dataCadastro": "2023-01-15",
      "ativo": true
    },
    {
      "id": 2,
      "nome": "Maria Oliveira",
      "email": "maria.oliveira@email.com",
      "telefone": "(21)99876-5432",
      "endereco": "Avenida Atlântica, 456, Copacabana, Rio de Janeiro, RJ, 20000-100",
      "dataCadastro": "2023-02-20",
      "ativo": true
    },
    {
      "id": 3,
      "nome": "Carlos Santos",
      "email": "carlos.santos@email.com",
      "telefone": "(31)97654-3210",
      "endereco": "Rua da Liberdade, 789, Savassi, Belo Horizonte, MG, 30110-010",
      "dataCadastro": "2023-03-10",
      "ativo": false
    },
    {
      "id": 4,
      "nome": "Ana Souza",
      "email": "ana.souza@email.com",
      "telefone": "(41)96543-2109",
      "endereco": "Rua XV de Novembro, 101, Centro, Curitiba, PR, 80020-300",
      "dataCadastro": "2023-04-05",
      "ativo": true
    },
    {
      "id": 5,
      "nome": "Pedro Costa",
      "email": "pedro.costa@email.com",
      "telefone": "(51)95432-1098",
      "endereco": "Avenida Protásio Alves, 202, Petrópolis, Porto Alegre, RS, 90410-000",
      "dataCadastro": "2023-05-18",
      "ativo": true
    }
]

const findAll = () => {
    return users
}

const findById = (id) => {
    return users.find(user => user.id === id)
}

const findByName = (nome) => {
    return users.find(user => user.nome === nome)
}

const create = (newUser) => {
    const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1
    const user = {id: newId, ...newUser}
    users.push(user)
    return user
}

const update = (id, user) => {
    const index = users.findIndex(user => user.id === id)

    if(user.nome) users[index].nome = user.nome
    if(user.email) users[index].email = user.email
    if(user.telefone) users[index].telefone = user.telefone
    if(user.endereco) users[index].endereco = user.endereco
    if(user.dataCadastro) users[index].dataCadastro = user.dataCadastro
    if(user.ativo){ 
        user[index].ativo = user.ativo
    } else{
      user.ativo = null
    } 
}

const remove = (id) => {
    const index = users.findIndex(user => user.id === id)
    users.splice(index, 1)
}

module.exports = {
    findAll,
    findById,
    findByName,
    create,
    update,
    remove
}

