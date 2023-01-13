const productsService = require('../services/productsServices');

const findAll = async (_req, res) => {
  const products = await productsService.findAll();
  res.status(200).json(products);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const product = await productsService.findById(id);
  console.log(product);
  if (product.err) {
    return res.status(404).json(product.err);
  }
  return res.status(200).json(product[0]);
};

const createProducts = async (req, res) => {
  const { name } = req.body;
  const { body } = req;
  const id = await productsService.createProducts(name, body);
  return res.status(201).json({ id, name });
};

module.exports = {
  findAll,
  findById,
  createProducts,
};