import express from 'express';

const app = express();

app.use(express.json());

app.get('/products', (request, response) => {
  response.send([
    {
      name: 'Default product',
      description: 'product description',
      price: 100,
    },
  ]);
});

export default app;
