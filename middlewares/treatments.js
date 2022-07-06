const Joi = require('joi');
const { runSchema } = require('./validation');

const treatments = {
  id: runSchema(Joi.object({
    id: Joi.number().required().positive().integer(),
  })),
  body: runSchema(Joi.object({
    nome: Joi.string().min(5).required(),
  })),
};
// validacao para o id e o nome

module.exports = { treatments };
