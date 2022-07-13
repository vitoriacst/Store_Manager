const Joi = require('joi');
const rescue = require('express-rescue');
const { productList, productListById,
   updateProducts,
  deleteProducts,
  InsertProductListt } = require('../services/products.services');
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
  name: Joi.string().min(5).required(),
   }).validate(req.body);
   if (error) return next(error);
   const { name } = req.body;
  const InsertedProducts = await InsertProductListt(name);
  //  if (!InsertedProducts) return next.error;
  console.log(InsertedProducts, 'linha 32');
    return res.status(201).json(InsertedProducts);
});

// criando func para editar (update) um produto existente
const updateProduct = rescue(async (req, res, next) => {
  const { error } = Joi.object({
 name: Joi.string().min(5).required(),
  }).validate(req.body);
  if (error) return next(error);
  const { id } = req.params;
  console.log(id);
  const { name } = req.body;
  console.log(name);
//  await verifyExists(id);
  const productEdit = await updateProducts(id, name);
  console.log(productEdit, 'linha 51');
  if (productEdit.error) { return next(productEdit.error); }
    return res.status(200).json(productEdit);
});

// criando func de deletar um produto com base em seu id
 const deleteProduct = async (req, res, next) => {
   const { id } = req.params;
   console.log(id, 'linha 59');
   const removeProduct = await deleteProducts(id);
   console.log(removeProduct, 'linha 60');
   if (removeProduct.error) { return next(removeProduct.error); }
    return res.status(204).end();
   };
module.exports = {
  deleteProduct,
  updateProduct,
  InsertProductList,
  productsList,
  productsListById,
};
