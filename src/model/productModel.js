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
        estoque: 10,
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
    const productWithId = {newId, ...newProduct}
    products.push(productWithId)
    return productWithId
}

const alterate = (id) => {

}

const remove = (id) => {
    const produto = products.find(product => product.id === id)
    products.slice(produto)
}

if(products.estoque == 0){
    disponibilidade = false;
}else{
    disponibilidade = true
}

module.exports = {
    findAll,
    findById,
    findByName,
    create,
    alterate,
    remove
}