const request = require('supertest');

const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('Auth', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('should be able create a authorization in application', async () => {
    const server = request(app);

    const { body: { id } } = await server.post('/ongs').send({
      name: 'APAD',
      email: 'contato@email.com',
      whatsapp: '47000000000',
      city: 'Rio Do Sul',
      uf: 'SC',
    });

    const response = await server.post('/auth').send({ id });

    expect(response.body).toHaveProperty('name');
    expect(response.body.name).toBe('APAD');
  });
});
