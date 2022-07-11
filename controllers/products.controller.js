const { productsService } = require('../services/products.services');
const { treatments } = require('../middlewares/treatments');

const controllerProducts = {
 productsList: async (_req, res) => {
    const listProducts = await productsService.productList();
    res.status(200).json(listProducts);
  },

  productsListById: async (req, res) => {
    const { id } = treatments.id(req.params);
    const listProductsById = await productsService.productListById(id);
    res.status(200).json(listProductsById);
  },

   createProduct: async (req, res) => {
     const { name } = treatments.body(req.body);
     const product = await productsService.updateProduct(name);
     res.status(201).json(product);
  },
};
module.exports = { controllerProducts };
