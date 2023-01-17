const productsService = require('../services/productsServices');
const validateProducts = require('../middlewares/validateProducts');

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

const updateProducts = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const resultValidation = await validateProducts.validateName(name);
  console.log(resultValidation, 'resultValidation');
  if (resultValidation) {
    return res.status(resultValidation.status).json(resultValidation.response);
  }
  const result = await productsService.updateProducts(id, name);
  if (!result) {
    return res.status(404).json({ message: 'Product not found' });
  }
  return res.status(200).json({ id, name });
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
  updateProducts,
};