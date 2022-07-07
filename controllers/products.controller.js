const Joi = require('joi');
const rescue = require('express-rescue');
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
  InsertProductList: rescue(async (req, res, next) => {
    const { error } = Joi.object({ name: Joi.string().required().min(5).not() }).validate(req.body);
    if (error) return next(error);
    const { name } = req.body;
    const InsertedProducts = await productsService.InsertProductList(name);
    if (!InsertedProducts) return next(error);
    return res.status(201).json(InsertedProducts);
  }),
};
module.exports = { controllerProducts };
