const connection = require('./connection');

const findAll = async () => {
  const [products] = await connection.execute(
    'SELECT * FROM products',
  );
  return products;
};

const findById = async (id) => {
  const product = await connection.execute(
    'SELECT * FROM products WHERE id=?',
    [id],
  );
  return product;
};

const createProducts = async (name) => {
  const [{ insertId }] = await connection.execute(
    'Insert INTO products (name) Values (?)',
    [name],
  );
  return insertId;
};

const updateProducts = async (id, name) => {
  const [{ affectedRows }] = await connection.execute(
    'UPDATE products SET name=? WHERE id=?',
    [name, id],
  );
  console.log(affectedRows, 'asdasdas');
  return affectedRows;
};

module.exports = {
  findAll,
  findById,
  createProducts,
  updateProducts,
}; 
