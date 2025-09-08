let products = [
    {   
        id: 1, 
        nome: "Camiseta Básica",
        descricao: "Camiseta 100% algodão, disponível em várias cores.",
        preco: 49.90,
        categoria: "Vestuário",
        estoque: 120,
        disponibilidade: true
      },
      {
        id: 2,
        nome: "Fone de Ouvido Bluetooth",
        descricao: "Fone sem fio com cancelamento de ruído e bateria de longa duração.",
        preco: 199.99,
        categoria: "Eletrônicos",
        estoque: 35,
        disponibilidade: true
      },
      {
        id: 3,
        nome: "Copo Térmico 500ml",
        descricao: "Mantém bebidas quentes ou frias por até 12 horas.",
        preco: 69.90,
        categoria: "Utilidades Domésticas",
        estoque: 80,
        disponibilidade: true
      },
      {
        id: 4,
        nome: "Notebook 15",
        descricao: "Notebook com processador i5, 8GB RAM e SSD de 256GB.",
        preco: 3499.00,
        categoria: "Informática",
        estoque: 0,
        disponibilidade: false
      },
      {
        id: 5,
        nome: "Livro: Aprendendo JavaScript",
        descricao: "Guia completo para iniciantes em programação com JavaScript.",
        preco: 89.90,
        categoria: "Livros",
        estoque: 50,
        disponibilidade: true
      }
    ];


const findAll = () => {
    return products
}

const findById = (id) => {
    return products.find(product => product.id === id)
}

const findByName = (nome) => {
    return products.find(product => product.nome === nome)
}

const create = (newProduct) => {
    const newId = products.length > 0 ? products[products.length - 1].id + 1 : 1
    const newDisponibilidade = newProduct.estoque > 0 ? true : false
    const product = {id: newId, ...newProduct , disponibilidade: newDisponibilidade}
    products.push(product)
    return product
}

const alterate = (id, produto) => {
  const index = products.findIndex(product => product.id === id)

  if(produto.nome) products[index].nome = produto.nome
  if(produto.descricao) products[index].descricao = produto.descricao
  if(produto.preco) products[index].preco = produto.preco
  if(produto.categoria) products[index].categoria = produto.categoria
  if(produto.estoque) products[index].estoque = produto.estoque
  if(!produto.estoque) products[index].estoque = 0


  if(produto.estoque > 0 ){
    products[index].disponibilidade = true 
  }else{
    products[index].disponibilidade = false 
  }

}

const remove = (id) => {
    const index = products.findIndex(product => product.id === id)
    products.splice(index, 1)
}

module.exports = {
    findAll,
    findById,
    findByName,
    create,
    alterate,
    remove
}