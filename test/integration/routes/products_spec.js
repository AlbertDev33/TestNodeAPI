import '../helpers';
import { expect } from 'chai';

describe('Routes: Products', () => {
  let request;
  let app;

  before(async () => {
    app = await setupApp();
    request = supertest(app);
  });

  after(() => app.database.close());

  const defaultProduct = {
    name: 'Default product',
    description: 'product description',
    price: 100,
  };

  describe('GET /products', () => {
    it('should return a list of products', done => {
      request.get('/products').end((err, response) => {
        expect(response.body[0]).to.eql(defaultProduct);
        done(err);
      });
    });
  });
});
