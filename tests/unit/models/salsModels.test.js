const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { expect } = require('chai');

const salesModels = require('../../../src/models/salesModels');
const mockSales = require('../mocks/mockSales');
const connection = require('../../../src/models/connection');

describe('Testing Sales Models', () => {
  describe('Geting all Sales', () => {
    afterEach(() => {
      sinon.restore();
    });
it('Get all Sales', async () => {
      sinon
        .stub(connection, 'execute')
        .resolves(mockSales.mockAllSales);

      await salesModels.findAll();
})
    it('Get 1 Sales', async () => {
      sinon
        .stub(connection, 'execute')
        .resolves([mockSales.mockfindSaleById]);

      await salesModels.findById(1);
    })
  });
});
