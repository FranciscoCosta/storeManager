const salesModels = require('../models/salesModels');

const findAll = async () => {
  const sales = await salesModels.findAll();
  return sales;
};

const findById = async (id) => {
  const sale = await salesModels.findById(id);
    if (!sale || sale.length === 0) {
    return { err: { code: 'not_found', message: 'Sale not found' } };
  }
  return sale;
};
const createSales = async (sales) => {
  const saleId = await salesModels.createSalesDate();
  await Promise.all(sales.map(async (sale) => {
    const { productId, quantity } = sale;
    await salesModels.createSales(saleId, productId, quantity);
 }));
   const newObject = {
      id: saleId,
      itemsSold: sales,
   };
  const response = { status: 201, newSale: newObject };
  return response;
};
module.exports = {
  findAll,
  createSales,
  findById,
};
