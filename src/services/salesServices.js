const salesModels = require('../models/salesModels');

const findAll = async () => {
  const sales = await salesModels.findAll();
  return sales;
};

const createSales = async (sales) => {
  const saleId = await salesModels.createSalesDate();
  await Promise.all(sales.map(async (sale) => {
    const { productId, quantity } = sale;
    console.log(saleId, 'sale ID');
    await salesModels.createSales(saleId, productId, quantity);
  }));
   const newObject = {
      id: saleId,
      itensSold: sales,
    };
    console.log(newObject, 'novo objcto');
    return newObject;
};
module.exports = {
  findAll,
  createSales,
};
