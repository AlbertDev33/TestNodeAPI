import express from 'express';

import ProductsController from '../controllers/products';

const router = express.Router();
const productsController = new ProductsController();

router.get('/', (request, response) =>
  productsController.get(request, response),
);

export default router;
