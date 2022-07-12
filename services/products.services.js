const { productsListById,
  productsList,
  deleteProduct, updateProduct, InsertProductsList } = require('../models/products.models');

// listar todos os produtos
  const productList = async () => {
    const products = await productsList();
    return products;
  };

// listar o produto por id
 const productListById = async (id) => {
    const products = await productsListById(id);
  if (!products) {
 return {
    error: {
      code: 'NOT_FOUND', message: 'Product not found' },
    };
  }
    return products;
  };

const InsertProductList = async (name) => {
    const products = await InsertProductsList(name);
    return products;
  };

  // atualizar o produto
const updateProducts = async (id, name) => {
  const verify = productListById(id);
   if (verify.error) return verify;
    const products = await updateProduct(id, name);
    return products;
  };
// deletar o produto
const deleteProducts = async (id) => {
  const verify = productListById(id);
  if (verify.error) return verify;
    const products = await deleteProduct(id);
    return products;
  };

module.exports = {
  deleteProducts,
  updateProducts,
InsertProductList,
productListById,
productList,
};
