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
    const name = req.params.name
    const product = productModel.findByName(name)

    if(product){
        res.status(200).json(product)
    }else{
        res.status(404).json({mensagem: "Produto não encontrado!"})
    }
}

const createProduct = (req, res) => {
    const {nome, descricao, preco, categoria, estoque} = req.body

    if(!nome || !descricao || preco || categoria || estoque){
        return res.status(400).json({mensagem: 'Nome e email são obrigatórios'})
    }else{
        const disponibilidade = true

        if(estoque == 0){
            disponibilidade = false;
        }else{
            disponibilidade = true
        }
        const newUser = productModel.create({nome, descricao, preco, categoria, estoque, disponibilidade})
        res.status(201).json(newUser)
    }
}

const alterateProduct = (req, res) => {
    
}

const deleteProduct = (req, res) => {
    const id = req.params.id
    
    productModel.remove(id)
    res.status(200).json({mensagem: 'Produto deletado com sucesso!'})
}

module.exports = {
    getAllProducts,
    getById,
    getByName,
    createProduct,
    alterateProduct,
    deleteProduct
}