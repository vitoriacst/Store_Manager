const Joi = require('joi');
const productsService = require('../services/products.services');
const { treatments } = require('../middlewares/treatments');

 const productsList = async (_req, res) => {
    const listProducts = await productsService.productList();
   return res.status(200).json(listProducts);
  };

const productsListById = async (req, res) => {
    const { id } = treatments.id(req.params);
    const listProductsById = await productsService.productListById(id);
   return res.status(200).json(listProductsById);
  };

  // inserindo produtos
const InsertProductList = async (req, res) => {
    const { name } = treatments.body(req.body);
    const InsertedProducts = await productsService.InsertProductList(name);
    return res.status(201).json(InsertedProducts);
  };
// criando func para editar (update) um produto existente
const updateProduct = (async (req, res, next) => {
   const { error } = Joi.object({
 name: Joi.string().required().min(5).not(),
  }).validate(req.body);
  if (error) return next(error);
    const { id } = req.params;
    const { name } = req.body;
  const productEdit = await productsService.updateProduct(id, name);
  if (productEdit.error) return next(productEdit.error);
    return res.status(200).json(productEdit);
   });
// criando func de deletar um produto com base em seu id
 const deleteProduct = async (req, res, next) => {
    const { id } = req.params;
    const removeProduct = await productsService.deleteProduct(id);
    if (removeProduct.error) return next(removeProduct.error);
    return res.status(204).send();
   };
module.exports = {
  deleteProduct,
  updateProduct,
  InsertProductList,
  productsList,
  productsListById,
};
