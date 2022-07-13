const {
  productsListById,
  productsList,
  deleteProduct,
  updateProduct,
  InsertProductsList } = require('../models/products.models');

// listar todos os produtos
  const productList = async () => {
    const products = await productsList();
    return products;
  };

// listar o produto por id
const productListById = async (id) => {
   console.log('entrei na 16');
    const products = await productsListById(id);
  if (!products) {
 return {
    error: {
      code: 'NOT_FOUND', message: 'Product not found' },
    };
  }
    return products;
  };

const InsertProductListt = async (name) => {
    const products = await InsertProductsList(name);
    return products;
};

// atualizar o produto
const updateProducts = async (id, name) => {
  console.log('linha 33');
  const verify = await productListById(id);
  console.log(verify, 'teste lina 34');
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
InsertProductListt,
productListById,
productList,
};
