const { Router } = require('express');
const { productsList,
  productsListById, InsertProductList,
  updateProduct, deleteProduct } = require('../controllers/products.controller');

const products = Router();

products.get('/:id', productsListById);
products.get('/', productsList);
products.post('/', InsertProductList);
products.put('/:id', updateProduct);
products.delete('/:id', deleteProduct);
module.exports = { products };
