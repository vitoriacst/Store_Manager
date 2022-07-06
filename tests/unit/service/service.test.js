const { models } = require('../../../models/products.models')
const { productsService } = require('../../../services/products.services')
const sinon = require('sinon')
const { expect , use} = require('chai');
const NotFoundError = require('../../../middlewares/error/NotFoundError');
const chaiAsPromised = require('chai-as-promised');
use(chaiAsPromised)

const data = [
  {
    id: 1,
    name: 'Martelo de Thor',
  },
  {
    id: 2,
    name: 'Traje de encolhimento',
  },
  {
    id: 3,
    name: 'Escudo do Capitão América',
  }
];



describe(' Testando -> products Model ', () => {
  beforeEach(() => {
    sinon.restore()
  })
  describe('Testando a funcao List', () => {
    it('se a funcao List lista os produtos', async () => {
      sinon.stub(models, 'productsList').resolves(data)
      const response = await productsService.productList()
      expect(response).to.be.deep.equal(data)
    })
  })
  describe('Testando a funcao ListById', () => {
    it('se a funcao List lista os produtos com o id correto', async () => {
      sinon.stub(models, 'productsListById').resolves(data)
      const response = await productsService.productListById(1)
      expect(response).to.be.deep.equal(data)
    })
    it('se a funcao List lista os produtos com o id incorreto', () => {
      sinon.stub(models, 'productsListById').resolves(null)
      expect( productsService.productListById({id:9})).to.eventually.be.rejectedWith(NotFoundError)
    })
  })
})
