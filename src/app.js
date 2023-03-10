const express = require('express');
const productsController = require('./controllers/productsControllers');
const salesControllers = require('./controllers/salesControllers');

// Francisco costa
const app = express();
app.use(express.json());

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.get('/products', productsController.findAll);
app.get('/products/:id', productsController.findById);
app.post('/products', productsController.createProducts);
app.put('/products/:id', productsController.updateProducts);
app.delete('/products/:id', productsController.deleteProducts);
app.get('/sales', salesControllers.findAll);
app.get('/sales/:id', salesControllers.findById);
app.post('/sales', salesControllers.createSales);
// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;
