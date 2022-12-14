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
     const products = 'INSERT INTO StoreManager.products (name) values (?)';
     const [{ insertId }] = await connection.query(products, [name]);
     console.log(insertId, name, 'teste linha 18');
     return insertId;
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
    const changes = await connection.query(products, [id]);
    console.log(changes, 'linha 34 model');
    return changes;
  };

module.exports = {
  deleteProduct,
  updateProduct,
InsertProductsList,
productsListById,
  productsList,
// Exists,
};
