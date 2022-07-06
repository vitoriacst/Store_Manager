const { Router } = require('express')
const { controllerProducts } = require('../controllers/products.controller')

const products = Router()

products.get('/:id', controllerProducts.productsListById)
products.get('/', controllerProducts.productsList)

module.exports = {products}