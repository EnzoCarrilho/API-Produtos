const productModel = require('../model/productModel')

const getAllProducts = (req,res) => {
    const products = productModel.findAll()
    res.status(200).json(products)
}

const getById = (req, res) => {
    const id = parseInt(req.params.id)
    const product = productModel.findById(id)

    if(product){
        res.status(200).json(product)
    }else{
        res.status(404).json({mensagem: "Produto não encontrado!"})
    }
}


const getByName = (req, res) => {
    const nome = req.params.nome
    const product = productModel.findByName(nome)

    if(product){
        res.status(200).json(product)
    }else{
        res.status(404).json({mensagem: "Produto não encontrado!"})
    }
}

const createProduct = (req, res) => {
    const {nome, descricao, preco, categoria, estoque} = req.body

    if(!nome || !descricao || !preco || !categoria || !estoque){
        return res.status(400).json({mensagem: 'Os campos são obrigatórios'})
    }else{
        const newProduct = productModel.create({nome, descricao, preco, categoria, estoque})
        res.status(201).json(newProduct)
    }
}

const updateProduct = (req, res) => {
    const id = parseInt(req.params.id)
    const{nome, descricao, preco, categoria, estoque} = req.body

    const product = productModel.update(id, {nome, descricao, preco, categoria, estoque})
    res.status(200).json(product) 

}

const deleteProduct = (req, res) => {
    const id = parseInt(req.params.id)
    
    productModel.remove(id)
    res.status(200).json({mensagem: 'Produto deletado com sucesso!'})
}

module.exports = {
    getAllProducts,
    getById,
    getByName,
    createProduct,
    updateProduct,
    deleteProduct
}