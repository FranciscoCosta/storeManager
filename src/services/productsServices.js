const productsModels = require('../models/productsModels');
const { validateName } = require('../middlewares/validateProducts');

const findAll = async () => {
  const products = await productsModels.findAll();
  return products;
};

const findById = async (id) => {
  const product = await productsModels.findById(id);
  if (!product) {
    return { err: { code: 'not_found', message: 'Product not found' } };
  }
  return product;
};

const createProducts = async (req) => {
  const { name } = req.body;
     const resultValidation = validateName(name);
  if (resultValidation) return resultValidation;
  const product = await productsModels.createProducts(name);
  return product;
};

module.exports = {
  findAll,
  findById,
  createProducts,
};