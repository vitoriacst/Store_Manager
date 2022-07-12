const { models } = require('../models/products.models');
const NotFoundError = require('../middlewares/error/NotFoundError');

// listar todos os produtos
  const productList = async () => {
    const products = await models.productsList();
    return products;
  };

// listar o produto por id
 const productListById = async (id) => {
    const products = await models.productsListById(id);
    if (!products) throw new NotFoundError('Product not found');
    return products;
  };

 const InsertProductList = async (name) => {
    const products = await models.InsertProductsList(name);
    return products;
  };

  // atualizar o produto
 const updateProduct = async (id, name) => {
    const products = await models.updateProduct(id, name);
    if (!products.changes) {
      throw new NotFoundError('Product not found');
    }
    return products.product;
  };
// deletar o produto
const deleteProduct = async (id) => {
  const verify = productListById(id);
  if (verify.error) return verify;
    const products = await models.deleteProduct(id);
    return products;
  };

module.exports = { deleteProduct, updateProduct, InsertProductList, productListById, productList };
