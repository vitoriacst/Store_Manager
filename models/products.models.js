const connection = require('./connection');

  const productsList = async () => {
    const products = 'SELECT * FROM  StoreManager.products';
    const [list] = await connection.query(products);
    return list;
  };

 const productsListById = async (id) => {
    const productsId = 'SELECT * FROM  StoreManager.products WHERE id = ?';
    const [[listById]] = await connection.query(productsId, [id]);
    return listById;
  };

   const InsertProductsList = async (name) => {
     const products = 'INSERT INTO StoreManager.products (name) values(?)';
     const [{ insertId }] = await connection.query(products, [name]);
     return { id: insertId, name };
   };

  const updateProduct = async (id, name) => {
 await connection.query(
   `UPDATE StoreManager.products
      SET name= ?
      WHERE id = ?`,
    [name, id],
  );
  return productsListById(id);
};

  const deleteProduct = async (id) => {
    const products = 'DELETE FROM StoreManager.products WHERE id = ?';
    const [{ changes }] = await connection.query(products, [id]);
    return changes;
  };

// const Exists = async (id) => {
// const exists = await connection.query(
//    `SELECT 1 FROM StoreManager.products
//       WHERE id = ?`,
//   [id],
// );
//   return !!exists;
// };

module.exports = {
  deleteProduct,
  updateProduct,
InsertProductsList,
productsListById,
  productsList,
// Exists,
};
