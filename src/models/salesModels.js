const connection = require('./connection');

const findAll = async () => {
  const [sales] = await connection.execute('SELECT * FROM sales');
  return sales;
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
};
