const { models } = require('../../../models/products.models')
const { productsService } = require('../../../services/products.services')
const sinon = require('sinon')
const { expect } = require('chai');

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
      sinon.stub(models,'productsList').resolves(data)
      const response = await productsService.productList()
      expect(response).to.be.deep.equal(data)
    })
  })
 
})

