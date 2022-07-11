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

  updateProduct: async (id, name) => {
    const products = 'UPDATE StoreManager.products SET name = ? WHERE id = ?';
    const [{ changes }] = await connection.query(products, [name, id]);
    return { changes, product: { id, name } };
  },
  deleteProduct: async (id) => {
    const products = 'DELETE FROM StoreManager.products WHERE id = ?';
    const [{ changes }] = await connection.query(products, [id]);
    return changes;
  },

};

module.exports = { models };
