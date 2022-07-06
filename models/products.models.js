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

  InsertProductsList: async (name) => {
    const products = 'INSERT INTO StoreManager.products(name)values(?)';
    const [{ insertId }] = await connection.query(products, [name]);
    return { id: insertId, name };
  },

};
module.exports = { models };
