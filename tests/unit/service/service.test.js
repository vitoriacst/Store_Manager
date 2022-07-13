const services = require('../../../services/products.services');
const models = require('../../../models/products.models');
const sinon = require('sinon');
const chaiAsPromised = require('chai-as-promised');
const { expect , use} = require('chai');
const NotFoundError = require('../../../middlewares/error/NotFoundError');
use(chaiAsPromised);

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
const product = [
   {
    id: 1,
    name: 'Martelo de Thor',
  },
]

describe('Arquivo Services', () => {
  after(() => {
    sinon.restore();
  });

  describe('list products', () => {
    it('verifica se é possível retornar um array de objetos se houver produtos', async () => {
      sinon.stub(models, 'productsList').resolves(data);

      const res = await services.productList();

      expect(res).to.be.an('array');

      data.forEach((product) => expect(product).to.be.an('object'));
    });
  });


 describe('func listById', () => {
    it('verifica se os objetos retornados pelo array possuem id e nome', async () => {
      sinon.stub(models, 'productsListById').resolves(product);

      const res = await services.productListById(1);

      data.forEach((product) => expect(product).to.be.an('object'));

      expect(res).to.have.keys['id', 'name'];
    });
 });

 describe('func insert products', () => {
  it('verifica se conseguimos adicionar um novo produto',async() => {
    sinon.stub(models, 'InsertProductsList').resolves(1);
    const teste = await services.InsertProductListt( "Martelo do Thor" )
    console.log(teste,'test service');
    expect(teste).to.have.property('id');
    expect(teste.name).to.be.equal("Martelo do Thor");
  });

});
});
// describe(' Testando -> products Services ', () => {
//   beforeEach(sinon.restore)
//   describe('Testando a funcao List', () => {
//     it('se a funcao List lista os produtos', () => {
//       sinon.stub(models, 'productsList').resolves(product);
//       return expect(services.productList()).to.eventually.deep.equal(product);
//     });
//   });
//   describe('Testando a funcao ListById', () => {
//     it('se a funcao List lista os produtos com o id correto', async () => {
//       sinon.stub(models, 'productsListById').resolves(data);
//       const response = await services.productListById(1);
//       expect(response).to.be.deep.equal(data);
//     });
//     it('se a funcao List lista os produtos com o id incorreto', () => {
//       sinon.stub(models, 'productsListById').resolves(null);
//       expect(services.productListById({ id: 9 })).to.eventually.be.rejectedWith(NotFoundError);
//     });
//   });
// });
