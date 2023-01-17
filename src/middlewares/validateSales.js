const salesModels = require('../models/salesModels');

const validateProductId = async (sales) => {
  const ID = await salesModels.findByMax();
  const test = sales.map((sale) => {
    const { productId } = sale;
    if (!productId) {
      const response = { status: 400, message: '"productId" is required' };
      return response;
    }
    if (productId > ID) {
      const response = { status: 404, message: 'Product not found' };
      return response;
    }
    return true;
  });
  return test;
};
  
const validateProductQuantity = (sales) => {
  const test = sales.map((sale) => {
    const { quantity } = sale;
    if (quantity <= 0) {
      const response = {
        status: 422, message: '"quantity" must be greater than or equal to 1' };
      return response;
    }
    if (!quantity) {
      const response = { status: 400, message: '"quantity" is required' };
      return response;
    }
    return true;
  });
  return test;
};
  
module.exports = {
  validateProductId,
  validateProductQuantity,
};
