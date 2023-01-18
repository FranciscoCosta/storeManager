const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');


const productsServices = require('../../../src/services/productsServices');
const productsControllers = require('../../../src/controllers/productsControllers');
const mockProducts = require('../mocks/mockProducts');

chai.use(sinonChai);
const { expect } = require('chai');

describe('Testing Product Services', () => {
  describe('Geting all Products', () => {
    afterEach(() => {
      sinon.restore();
    });

    const res = {}
    const req = {}

    beforeEach(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
    });
    
    it('Should return all products', async () => {
      sinon.stub(productsServices, 'findAll').resolves(mockProducts.mockAllProducts);

      await productsControllers.findAll(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(mockProducts.mockAllProducts);
    });
  });
    describe('Geting 1 Product', () => {
    afterEach(() => {
      sinon.restore();
    });

    const res = {}
    const req = {}

    beforeEach(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
    });
  });
});