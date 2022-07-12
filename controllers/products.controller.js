const Joi = require('joi');
const rescue = require('express-rescue');
const { productList, productListById,
  verifyExists, updateProducts, deleteProducts } = require('../services/products.services');
const { treatments } = require('../middlewares/treatments');

 const productsList = async (_req, res) => {
    const listProducts = await productList();
   return res.status(200).json(listProducts);
  };

const productsListById = async (req, res) => {
    const { id } = treatments.id(req.params);
  const listProductsById = await productListById(id);
   if (listProductsById.error) {
       return res.status(404).json({ message: listProductsById.error.message });
     }
   return res.status(200).json(listProductsById);
  };

  // inserindo produtos
const InsertProductList = rescue(async (req, res, next) => {
   const { error } = Joi.object({
  name: Joi.string().required().min(5).not(),
  }).validate(req.body);
  if (error) return next(error);
    const { name } = req.body;
  const InsertedProducts = await InsertProductList(name);
  if (!InsertProductList) return next.error;
    return res.status(201).json(InsertedProducts);
});

// criando func para editar (update) um produto existente
const updateProduct = (async (req, res, next) => {
  const { error } = Joi.object({
 id: Joi.number().required().positive().integer(),
 name: Joi.string().required().min(5).not(),
  }).validate(req.body);
  if (error) return next(error);
    const { id } = req.params;
  const { name } = req.body;
 await verifyExists(id);
  const productEdit = await updateProducts(id, name);
  if (productEdit.error) { return next(productEdit.error); }
    return res.status(200).json(productEdit);
});

// criando func de deletar um produto com base em seu id
 const deleteProduct = async (req, res, next) => {
    const { id } = req.params;
    const removeProduct = await deleteProducts(id);
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
