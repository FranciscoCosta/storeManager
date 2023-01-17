const connection = require('./connection');

const findAll = async () => {
    const query = `
    SELECT
    (sp.sale_id) AS saleId,
    (s.date) AS date,
    (sp.product_id) AS productId,
    (sp.quantity) AS quantity
  FROM StoreManager.sales_products AS sp
    JOIN StoreManager.sales AS s ON s.id = sp.sale_id
      ORDER BY sp.sale_id ASC, sp.product_id ASC
  `;
    const [sales] = await connection.execute(query);
  return sales;
};

const findById = async (id) => {
  const query = `
  SELECT
   (s.date) AS date,
      (sp.product_id) AS productId,
      (sp.quantity) AS quantity
    FROM StoreManager.sales_products AS sp
      JOIN StoreManager.sales AS s ON s.id = sp.sale_id
        WHERE sp.sale_id = ?
  `;
    const [sale] = await connection.execute(query, [id]);
  return sale;
};

const findByMax = async () => {
  const [id] = await connection.execute(
    'Select Max(id) as id from products',
);
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
  findById,
};
