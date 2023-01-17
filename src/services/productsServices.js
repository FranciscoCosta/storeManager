const productsModels = require('../models/productsModels');
const { validateName } = require('../middlewares/validateProducts');

const findAll = async () => {
  const products = await productsModels.findAll();
  return products;
};

const findById = async (id) => {
  const [product] = await productsModels.findById(id);
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

const updateProducts = async (id, name) => {
  const [resultado] = await productsModels.findById(id);
  if (resultado.length > 0) {
     await productsModels.updateProducts(id, name);
    return true;  
  }
    return false;
};

const deleteProducts = async (id) => {
  const [product] = await productsModels.findById(id);
  if (product.length === 0) return { status: 404, response: { message: 'Product not found' } };
  await productsModels.deleteProducts(id);
  return { status: 204 };
};

module.exports = {
  findAll,
  findById,
  createProducts,
  updateProducts,
  deleteProducts,
};