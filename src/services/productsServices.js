const productsModels = require('../models/productsModels');

const findAll = async () => {
  const products = await productsModels.findAll();
  return products;
};

const findById = async (id) => {
  const product = await productsModels.findById(id);
  console.log(product, 'Sevice');
  if (product.length === 0) {
    return { err: { code: 'not_found', message: 'Product not found' } };
  }
  return product;
};

const createProducts = async (name) => {
  const product = await productsModels.createProducts(name);
  return product;
};

module.exports = {
  findAll,
  findById,
  createProducts,
};