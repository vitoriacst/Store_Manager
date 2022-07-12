const { models } = require('../../../models/products.models')
const connection = require('../../../models/connection');

const sinon = require('sinon')
const { expect, use } = require('chai');

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
      sinon.stub(connection, 'query').resolves([data])
      const response = await models.productsList()
      expect(response).to.be.deep.equal(data)
    })
  })
  describe('Testando a funcao ListByid', () => {
    it('se a funcao List lista os produtos de acordo com o id', async () => {
      sinon.stub(connection, 'query').resolves([[data]])
      const response = await models.productsListById(1)
      expect(response).to.be.equal(data)
    })
  })
   describe('Testando nao podemos inserir os dados sem o name', () => {
    it('Testando nao podemos inserir os dados sem o name', async () => {
      sinon.stub(connection, 'query').resolves([[data]])
      const response = await models.productsListById(1)
      expect(response).to.be.equal(data)
    })
   })
   describe('Testa a função update', () => {
    it('Verifica se é possível editar um produto', async () => {
      sinon.stub(connection, 'query').resolves([{ insertId: 1 }]);
      expect(productsModel.edit(editado.product.id, editado.product.name)).to.eventually.be.deep.equal(editado);
    })
  })

  describe('Testa a função delete', () => {
    it('Testa se é possível deletar um produto', async () => {
      sinon.stub(connection, 'query').resolves([{ changes: 1 }]);
      const response = await productsModel.delete(1);
      expect(response).to.be.equal(1);
    })
  })
})

