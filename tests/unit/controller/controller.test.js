const sinon = require('sinon');
const { expect } = require('chai');
const services = require('../../../services/products.services');
const controller = require('../../../controllers/products.controller');

const products = [
  {
    id: 1,
    name: 'Martelo de Thor',
  },
  {
    id: 2,
    name: 'Traje de encolhimento',
  },
];

describe('Arquivo Controller', () => {
  const res = {};
  const req = {};

  before(() => {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub();
  });

  after(() => {
    sinon.restore();
  });

  describe('product list', () => {
    before(() => {
      sinon.stub(services, 'productList').resolves(products);
    });

    it('verifica se retorna o status 200', async () => {
      await controller.productsList(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true);
    });

    it('verifica se retorna um json com um array de objetos', async () => {
      await controller.productsList(req, res);
      products.forEach((product) => expect(product).to.be.an('object'));
    });

    it('verifica se os objetos retornados pelo array possuem id e nome', async () => {
      await controller.productsList(req, res);
      expect(res.json).to.have.keys[('id', 'name')];
    });
  });

  describe('testando  a func ListById', () => {
    before(() => {
      req.params = { id: 1 }
    });

    it('verifica se retorna o status 200', async () => {
      await controller.productsListById(req, res);

      expect(res.status.calledWith(200)).to.be.equal(true);
    });

    it('verifica se retorna um json com um array de objetos e se possui id e name', async () => {
      await controller.productsListById(req, res);

      expect(res.json).to.have.keys[('id', 'name')];
    });
  });
})
