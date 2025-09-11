import request from 'supertest';
import app from '../src/app.js';

describe('User Routes', () => {
  let createdUserId;

  it('should create a new user (POST /users)', async () => {
    const res = await request(app)
      .post('/users')
      .send({
        name: 'Test User',
        email: 'testuser@example.com',
        password: 'password123',
        role: 'customer'
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.name).toBe('Test User');
    createdUserId = res.body.id;
  });

  it('should update an existing user (PUT /users/:id)', async () => {
    const res = await request(app)
      .put(`/users/${createdUserId}`)
      .send({
        name: 'Updated User',
        email: 'updateduser@example.com',
        password: 'newpassword',
        role: 'admin'
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body.name).toBe('Updated User');
    expect(res.body.email).toBe('updateduser@example.com');
  });

  it('should delete an existing user (DELETE /users/:id)', async () => {
    const res = await request(app)
      .delete(`/users/${createdUserId}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toBe('Xóa thành công');
    expect(res.body.user.id).toBe(createdUserId);
  });

  it('should return 404 when updating non-existent user', async () => {
    const res = await request(app)
      .put('/users/999999')
      .send({
        name: 'Non Existent',
        email: 'nonexistent@example.com',
        password: 'nopassword',
        role: 'customer'
      });
    expect(res.statusCode).toEqual(404);
  });

  it('should return 404 when deleting non-existent user', async () => {
    const res = await request(app)
      .delete('/users/999999');
    expect(res.statusCode).toEqual(404);
  });
});
