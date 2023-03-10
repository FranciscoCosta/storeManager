const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { expect } = require('chai');

const productsModels = require('../../../src/models/productsModels');
const mockProducts = require('../mocks/mockProducts');
const connection = require('../../../src/models/connection');

describe('Testing Product Models', () => {
  describe('Geting all Products', () => {
    afterEach(() => {
      sinon.restore();
    });
    it('Should return all products', async () => {
      
      sinon.stub(connection, 'execute').resolves([mockProducts.mockAllProducts]);

      results = await productsModels.findAll();

      expect(results).to.be.deep.equal(mockProducts.mockAllProducts);
    });
  });

  describe('Geting one Product', () => {
    afterEach(() => {
      sinon.restore();
    });
    it('Should return one product', async () => {
      
      sinon.stub(connection, 'execute').resolves([mockProducts.mockAllProducts[0]]);

      [results] = await productsModels.findById(1);

      expect(results).to.be.deep.equal(mockProducts
        .mockOneProduct);
    });
  });

  describe('Create one Product', () => {
    afterEach(() => {
      sinon.restore();
    }
    );
    it('Should return one product', async () => {
      const newProduct = { name: 'Teste' };

      sinon.stub(connection, 'execute').resolves([{ insertId: 5 }]);

      const result = await productsModels.createProducts(newProduct);


      expect(result).to.be.deep.equal(5)
    });
  });
  describe('Update one Product', () => {
    afterEach(() => {
      sinon.restore();
    }
    );
    it('Should update one product', async () => {
      const newProductName = { name: 'Teste' };
      const idProduct = 1;

      sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);

      const result = await productsModels.updateProducts(idProduct, newProductName);

      expect(result).to.be.deep.equal(1)

    });
  });

    describe('Delete one Product', () => {
    afterEach(() => {
      sinon.restore();
    }
    );
    it('Should delete one product', async () => {
      const idProduct = 1;

      sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);

      const result = await productsModels.deleteProducts(idProduct);

      expect(result).to.be.deep.equal(true)

    });
  });
});