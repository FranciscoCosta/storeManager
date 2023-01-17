const productsModels = require('../models/productsModels');
const { validateName } = require('../middlewares/validateProducts');

const findAll = async () => {
  const products = await productsModels.findAll();
  return products;
};

const findById = async (id) => {
  const [product] = await productsModels.findById(id);
  console.log(product, 'AQUIIIII');
  if (!product || product.length === 0) {
    return { err: { code: 'not_found', message: 'Product not found' } };
  }
  return product;
};

const createProducts = async (name) => {
  const resultValidation = validateName(name);
  if (resultValidation) return resultValidation;
  const product = await productsModels.createProducts(name);
    const newProduct = { status: 201, response: { id: product, name } };
    return newProduct;
};

module.exports = {
  findAll,
  findById,
  createProducts,
};