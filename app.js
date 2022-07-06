const express = require('express');
require('express-async-errors')
const { products } = require('./routes/products.routes')
const middlewareError = require('./middlewares/error/middlewareError')
const app = express();
app.use(express.json())
// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});


app.use('/products',products)

app.use(middlewareError)

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;