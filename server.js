const express = require('express')
const app = express()
const porta = 8000
const productRoutes = require('./src/routes/productRoutes')

app.use(express.json())

app.get('/', (req, res) => {
    res.send('API Funcionando!')
})

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)

app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`)
})




