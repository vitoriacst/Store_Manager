const { models } = require('../models/products.models');
const NotFoundError = require('../middlewares/error/NotFoundError');

const productsService = {
  productList: async () => {
    const products = await models.productsList();
    return products;
  },

  productListById: async (id) => {
    const products = await models.productsListById(id);
    if (!products) throw new NotFoundError('Product not found');
    return products;
  },

  InsertProductList: async (name) => {
    const products = await models.InsertProductsList(name);
    return products;
  },
};

module.exports = { productsService };
