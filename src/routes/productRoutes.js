const express = require('express')

const router = express.Router()

const productController = require('../controller/productController')

router.get('/', productController.getAllProducts)
router.get('/:id', productController.getById)
router.get('/:nome', productController.getByName)
router.post('/', productController.createProduct)
router.put('/:id', productController.updateProduct)
router.delete('/:id', productController.deleteProduct)

module.exports = router