const connection = require('./connection');

const findAll = async () => {
  const query = 'SELECT * FROM sales_products ORDER BY id DESC, ORDER BY product_id ASC';
  const [sales] = await connection.execute([query]);
  return sales;
};

const findByMax = async () => {
  const [id] = await connection.execute(
    'Select Max(id) as id from products',
);
  console.log(id[0].id);
  return id[0].id;
};

const createSales = async (saleId, productId, quantity) => {
await connection.execute(
    'INSERT INTO sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
    [saleId, productId, quantity],
  );
};
const createSalesDate = async () => {
  const [saleDate] = await connection.execute(
    'INSERT INTO sales (date) VALUES (CURRENT_TIMESTAMP)',
  );
  const { insertId } = saleDate;
  return insertId;
};

module.exports = {
  findAll,
  createSales,
  createSalesDate,
  findByMax,
};
