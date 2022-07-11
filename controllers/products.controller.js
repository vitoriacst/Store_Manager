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
// criando func para editar (update) um produto existente
  updateProduct: async (req, res) => {
    const { id } = treatments.id(req.params);
    const { name } = treatments.body(req.body);
    const productEdit = await productsService.updateProduct(id, name);
    res.status(200).json(productEdit);
   },

  deleteProduct: async (req, res) => {
    const { id } = treatments.id(req.params);
    const removeProduct = await productsService.deleteProduct(id);
    res.status(204).json(removeProduct);
   },
};
module.exports = { controllerProducts };
