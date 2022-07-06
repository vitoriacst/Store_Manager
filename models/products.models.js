const connection = require('./connection');

const models = {
  productsList: async () => {
    const products = 'SELECT * FROM  StoreManager.products';
    const [list] = await connection.query(products);
    return list;
  },

  productsListById: async (id) => {
    const productsId = 'SELECT * FROM  StoreManager.products WHERE id = ?';
    const [[listById]] = await connection.query(productsId, [id]);
    return listById;
  },

};
module.exports = { models };
