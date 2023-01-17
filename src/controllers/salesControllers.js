const salesServices = require('../services/salesServices');
const validateSales = require('../middlewares/validateSales');

const findAll = async (_req, res) => {
  const sales = await salesServices.findAll();
  res.status(200).json(sales);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const sale = await salesServices.findById(id);
    if (sale.err) {
    return res.status(404).json(sale.err);
  }
  res.status(200).json(sale);
};

const createSales = async (req, res) => {
  const sales = req.body;
  const teste = await validateSales.validateProductId(sales);
  const error = teste.find((element) => element.status);
  if (error) {
    const mensagem = error.message;
    return res.status(error.status).json({ message: mensagem });  
  }
  const testeQ = await validateSales.validateProductQuantity(sales);
  const errorQ = testeQ.find((element) => element.status);
  if (errorQ) {
    const mensagem = errorQ.message;
    return res.status(errorQ.status).json({ message: mensagem });
  }
    const response = await salesServices.createSales(sales);
    return res.status(response.status).json(response.newSale);  
};

module.exports = {
  findAll,
  createSales,
  findById,
};  