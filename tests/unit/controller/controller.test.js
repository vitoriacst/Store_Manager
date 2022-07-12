const { productsController } = require('../../../controllers/products.controller');
const { productsServices } = require('../../../services/products.services');
const { data } = require('../mocks/products.mocks')
const chaiAsPromised = require('chai-as-promised');
const sinon = require('sinon');

const { expect, use } = require('chai');

use(chaiAsPromised);

describe('testes do arquivo Controller', () => {
  const response= {};
  const request = {};

  before(() => {
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub();
    // response.send = sinon.stub().returns();
  });

  after(() => {
    sinon.restore();
  });

  describe('testa função getAll', () => {
    before(() => {
      sinon.stub(productServices, 'getAll').resolves(products);
    });
    it('verifica o retorno da func (Status 200)', async () => {
      await productsController.getAll(request, response);
      expect(response.status.calledWith(200)).to.be.equal(true);
    });
    it('verifica se retorna um json com um array de objetos', async () => {
      await productsController.getAll(request, response);
      products.forEach((produto) => expect(produto).to.be.an('object'));
    });
    it('verifica o retorno do array', async () => {
      await productsController.getAll(request, response);
      expect(response.json).to.have.keys[('id', 'name')];
    });
  });
    describe('Testa função productsListById', () => {
      before(() => {
        request.params = { id: 1 }
      });
      it('verifica o status de sucesso 200', async () => {
        await productsController.productsListById(request, response);
        expect(response.status.calledWith(200)).to.be.equal(true);
      });
      it('verifica o retorno se e correspondente ao id e name', async () => {
      await productsController.productsListById(request, response);
      expect(response.json).to.have.keys[('id', 'name')];
    });
    });

});
