const { Router } = require('express');
const { controllerProducts } = require('../controllers/products.controller');

const products = Router();

products.get('/:id', controllerProducts.productsListById);
products.get('/', controllerProducts.productsList);
products.post('/', controllerProducts.createProduct);
products.put('/:id', controllerProducts.updateProduct);
products.delete('/:id', controllerProducts.deleteProduct);
module.exports = { products };
