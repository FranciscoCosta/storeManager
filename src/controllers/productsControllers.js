const productsService = require('../services/productsServices');

const findAll = async (_req, res) => {
  const products = await productsService.findAll();
  res.status(200).json(products);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const product = await productsService.findById(id);
  if (product.err) {
    return res.status(404).json(product.err);
  }
  return res.status(200).json(product[0]);
};

const createProducts = async (req, res) => {
  const { name } = req.body;
  const result = await productsService.createProducts(name);
if (result.status) return res.status(result.status).json(result.response);
        const { status } = result;
        return res.status(status).json(result);
  };

module.exports = {
  findAll,
  findById,
  createProducts,
};