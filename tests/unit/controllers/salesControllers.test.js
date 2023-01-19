const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");

const salesServices = require("../../../src/services/salesServices");
const salesControllers = require("../../../src/controllers/salesControllers");
const mockSales = require("../mocks/mockSales");

chai.use(sinonChai);
const { expect } = require("chai");
const { findById } = require("../../../src/models/salesModels");

describe("Testing Sales Controllers", () => {
  describe("Geting all Sales", () => {
    afterEach(() => {
      sinon.restore();
    });

    const res = {};
    const req = {};

    beforeEach(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
    });

    it("Should return all products", async () => {
      sinon
        .stub(salesServices, "findAll")
        .resolves(mockSales.mockAllSales);

      await salesControllers.findAll(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(mockSales.mockAllSales);
    });
  });
});
  describe("Geting one Sales", () => {
    afterEach(() => {
      sinon.restore();
    });

    const res = {};
    const req = {
      params: { id: 1 },
    };

    beforeEach(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
    });

    it("Should return one sale", async () => {
      sinon
        .stub(salesControllers, "findById")
        .resolves({ status: 200, response: mockSales.mockOneSale });
      await salesControllers.findById(req, res);

    });
  });