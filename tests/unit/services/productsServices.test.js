const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');


const productsModels = require('../../../src/models/productsModels');
const productsServices = require('../../../src/services/productsServices');
const mockProducts = require('../mocks/mockProducts');

chai.use(sinonChai);
const { expect } = require('chai');

describe('Testing Product Services', () => {
  describe('Geting all Products', () => {
    afterEach(() => {
      sinon.restore();
    });
    it('Should return all products', async () => {
      sinon.stub(productsModels, 'findAll').resolves(mockProducts.mockAllProducts);

      results = await productsServices.findAll();

      expect(results).to.be.deep.equal(mockProducts.mockAllProducts);
    });
  });
  describe('Geting one Product', () => {
    afterEach(() => {
      sinon.restore();
    });
    it('Should return fail mensage if product does not exit', async () => {
      sinon.stub(productsModels, 'findById').resolves([]);
      const orderId = 999;
      results = await productsServices.findById(orderId);

      expect(results).to.be.deep.equal({ err: { code: 'not_found', message: 'Product not found' } })
    });
    it('Should return one product', async () => {
      const orderId = 1;
      sinon.stub(productsModels, 'findById').resolves(mockProducts.mockAllProducts);
      results = await productsServices.findById(orderId);
      expect(results).to.be.deep.equal(mockProducts.mockAllProducts[0]);
    });
  });
  describe('Creating a Product', () => {
        afterEach(() => {
      sinon.restore();
    });
    it('Should return new Product', async () => {
      const req = {
        body: { name: 'Testando' },
      };

      const { name } = req.body;
      newId = 4;
      
      sinon.stub(productsModels, 'createProducts').resolves(newId);

      const results = await productsServices.createProducts(req);
    });
        it('Should return new Product', async () => {
      const req = {
        body: { name: 'T' },
      };

      const { name } = req.body;
      newId = 4;
      
      sinon.stub(productsModels, 'createProducts').resolves(newId);

      const results = await productsServices.createProducts(req);
    });
  });


    describe('Update a Product', () => {
        afterEach(() => {
      sinon.restore();
    });
    it('Should fail to update new Product', async () => {
      const name = 'Testando';
      const id = 1;

      sinon.stub(productsModels, 'findById').resolves([[]]);

      const results = await productsServices.updateProducts(id, name);
      
      expect(results).to.be.false;
    });
      it('Should update new Product', async () => {
        const name = 'Testando';
        const id = 1;

        sinon.stub(productsModels, 'findById').resolves([['item', 'item2']]);
        
        const results = await productsServices.updateProducts(id, name);

        expect(results).to.be.true;
  
      });

  });
  
});