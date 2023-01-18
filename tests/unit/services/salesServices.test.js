const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const salesModels = require('../../../src/models/salesModels')
const salesServices = require('../../../src/services/salesServices')
const productsModels = require('../../../src/models/productsModels');
const productsServices = require('../../../src/services/productsServices');
const mockSales = require('../mocks/mockSales');


chai.use(sinonChai);
const { expect } = require('chai');

describe('Get all sales', () => {
	describe('get all sales', () => {
    it('', async () => {
      sinon
        .stub(salesModels, 'findAll')
        .resolves(mockSales.mockAllSales);
      
      const sales = await salesServices.findAll();

      expect(sales).to.be.deep.equal(mockSales.mockAllSales);
    });
  });

  	describe('get one sale', () => {
    it('', async () => {
      sinon
        .stub(salesModels, 'findById')
        .resolves(mockSales.mockOneSale);
      
      await salesServices.findById(1);

    });
  });
});

