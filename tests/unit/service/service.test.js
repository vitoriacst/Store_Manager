const  { productList, productListById,
   }  = require('../../../services/products.services');
const models = require('../../../models/products.models');
const sinon = require('sinon')
const chaiAsPromised = require('chai-as-promised');
const { expect , use} = require('chai');
const NotFoundError = require('../../../middlewares/error/NotFoundError');
use(chaiAsPromised)

const data = [[
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
]];

describe(' Testando -> products Services ', () => {
  describe('Testando a funcao List', () => {
    afterEach(() => {
      sinon.restore()
    })
    it('se a funcao List lista os produtos', async () => {
      sinon.stub(models, 'productsList').resolves(data)
      const response = await productList()
       expect(response).to.be.deep.equal(data)
    })
  })
  describe('Testando a funcao ListById', () => {
    it('se a funcao List lista os produtos com o id correto', async () => {
      sinon.stub(models, 'productsList').resolves(data)
      sinon.stub(models, 'productsListById').resolves([[data]])
      const response = await productListById(1)
      console.log(response,'linha 40');
      expect(response).to.be.deep.equal(data)
    })
    it('se a funcao List lista os produtos com o id incorreto', () => {
      sinon.stub(models, 'productsListById').resolves(null)
      expect( productListById({id:9})).to.eventually.be.rejectedWith(NotFoundError)
    })
  })
})
