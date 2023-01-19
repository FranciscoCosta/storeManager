const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");

const productsServices = require("../../../src/services/productsServices");
const productsControllers = require("../../../src/controllers/productsControllers");
const mockProducts = require("../mocks/mockProducts");

chai.use(sinonChai);
const { expect } = require("chai");
const { findById } = require("../../../src/models/salesModels");

describe("Testing Product Services", () => {
  describe("Geting all Products", () => {
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
        .stub(productsServices, "findAll")
        .resolves(mockProducts.mockAllProducts);

      await productsControllers.findAll(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(mockProducts.mockAllProducts);
    });
  });

  describe("Geting one Product", () => {
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

    it("Should return one product", async () => {
      sinon
        .stub(productsServices, "findById")
        .resolves({ status: 200, response: mockProducts.mockOneProduct });
      await productsControllers.findById(req, res);

      expect(res.status).to.have.been.calledWith(200);
  
    });
  });

  	describe('DELETE  one Product', () => {
    it('delet one product', async () => {
      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(productsServices, 'deleteProducts')
        .resolves({ status: 204 });

      await productsServices.deleteProducts(req, res);
		})
	})
});
