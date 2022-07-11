const { models } = require('../models/products.models');
const NotFoundError = require('../middlewares/error/NotFoundError');

// listar todos os produtos
const productsService = {
  productList: async () => {
    const products = await models.productsList();
    return products;
  },
// listar o produto por id
  productListById: async (id) => {
    const products = await models.productsListById(id);
    if (!products) throw new NotFoundError('Product not found');
    return products;
  },

 InsertProductList: async (name) => {
    const products = await models.InsertProductsList(name);
    return products;
  },
  // atualizar o produto
  updateProduct: async (id, name) => {
    const products = await models.updateProduct(id, name);
    if (!products.changes) {
      throw new NotFoundError('Product not found');
    }
    return products.product;
  },
// deletar o produto
  deleteProduct: async (id) => {
    const products = await models.deleteProduct(id);
    if (!products) throw new NotFoundError('Product not found');
    return true;
  },
};

module.exports = { productsService };
