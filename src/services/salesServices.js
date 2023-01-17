const salesModels = require('../models/salesModels');

const findAll = async () => {
  const sales = await salesModels.findAll();
  return sales;
};

// const testa = (sales) => {
//   const { name, error } = sales;
//   console.log(name, error);
// };
// testa({ name: 'xico' });

salesModels.findByMax();

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
};
