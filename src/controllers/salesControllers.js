const salesServices = require('../services/salesServices');

const findAll = async (_req, res) => {
  const sales = await salesServices.findAll();
  res.status(200).json(sales);
};

const createSales = async (req, res) => {
  const sales = req.body;
  const newSales = await salesServices.createSales(sales);
  res.status(201).json(newSales);
};

module.exports = {
  findAll,
  createSales,
};  