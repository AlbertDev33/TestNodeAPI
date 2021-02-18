import express from 'express';

const router = express.Router();

router.get('/', (request, response) => [
  {
    name: 'Default product',
    description: 'product description',
    price: 100,
  },
]);

export default router;
