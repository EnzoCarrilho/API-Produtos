const userModel = require('../model/userModel')

const getAllUsers = (req,res) => {
    const users = userModel.findAll()
    res.status(200).json(users)
}

const getUserById = (req,res) => {
    const id = parseInt(req.params.id)
    const user = userModel.findById(id)
    
    if(user){
        res.status(200).json(product)
    }else{
        res.status(404).json({mensagem: "Usuário não encontrado!"})
    }
}

const getUserByName = (req,res) => {
    const nome = req.params.nome
    const user = userModel.findByName(nome)

    if(user){
        res.status(200).json(product)
    }else{
        res.status(404).json({mensagem: "Usuário não encontrado!"})
    }
}

const createUser = (req,res) => {
    const{nome, email, telefone, endereco, dataCadastro, ativo} = req.body

    if(!nome || !email || !telefone || !endereco || !dataCadastro || !ativo){
        return res.status(400).json({mensagem: 'Os campos são obrigatórios'})
    }else{
        const newUser = userModel.create({nome, email, telefone, endereco, dataCadastro, ativo})
        res.status(201).json(newUser)
    }    
}

const alterateUser = (req,res) => {
    const id = parseInt(req.params.id)
    const{nome, email, telefone, endereco, dataCadastro, ativo} = req.body
    
    const user = userModel.alterate(id, {nome, email, telefone, endereco, dataCadastro, ativo})
    res.status(200).json(user) 
}

const deleteUser = (req,res) => {
     const id = parseInt(req.params.id)
        
    userModel.remove(id)
    res.status(200).json({mensagem: 'Usuário deletado com sucesso!'})
}

module.exports = {
    getAllUsers,
    getUserById,
    getUserByName,
    createUser,
    alterateUser,
    deleteUser
}