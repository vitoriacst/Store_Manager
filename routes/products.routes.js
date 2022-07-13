const { Router } = require('express');
const controller = require('../controllers/products.controller');

const products = Router();

products.get('/:id', controller.productsListById);
products.get('/', controller.productsList);
products.post('/', controller.InsertProductList);
products.put('/:id', controller.updateProduct);
products.delete('/:id', controller.deleteProduct);
module.exports = products;
