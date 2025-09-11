import request from 'supertest';
import app from '../src/app.js';

describe('Product Routes', () => {
  let createdProductId;

  it('should create a new product (POST /products)', async () => {
    const res = await request(app)
      .post('/products')
      .send({
        name: 'Test Product',
        description: 'This is a test product',
        price: 99.99,
        stock: 10,
        category_id: null
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.name).toBe('Test Product');
    expect(res.body.price).toBe('99.99');
    createdProductId = res.body.id;
  });

  it('should get all products (GET /products)', async () => {
    const res = await request(app)
      .get('/products');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it('should get product by ID (GET /products/:id)', async () => {
    const res = await request(app)
      .get(`/products/${createdProductId}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body.id).toBe(createdProductId);
    expect(res.body.name).toBe('Test Product');
  });

  it('should return 404 for non-existent product', async () => {
    const res = await request(app)
      .get('/products/999999');
    expect(res.statusCode).toEqual(404);
  });
});
