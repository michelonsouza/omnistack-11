const request = require('supertest');

const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('Incident', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('should be have a list of incidents', async () => {
    const response = await request(app).get('/incidents');

    expect(response.body).toBeInstanceOf(Array);
    expect(response.headers).toHaveProperty('x-total-count');
    expect(response.headers['x-total-count']).toBe('0');
  });

  it('should be create an incident', async () => {
    const { body: { id } } = await request(app).post('/ongs').send({
      name: 'APAD',
      email: 'contato@email.com',
      whatsapp: '47000000000',
      city: 'Rio Do Sul',
      uf: 'SC',
    });

    const response = await request(app).post('/incidents').set('Authorization', id).send({
      title: 'Caso 1',
      description: 'Galiha atropelada',
      value: 120,
    });

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toEqual(1);
  });

  it('should be delete an incident', async () => {
    const { body: { id } } = await request(app).post('/ongs').send({
      name: 'APAD',
      email: 'contato@email.com',
      whatsapp: '47000000000',
      city: 'Rio Do Sul',
      uf: 'SC',
    });

    const { body } = await request(app).post('/incidents').set('Authorization', id).send({
      title: 'Caso 1',
      description: 'Galiha atropelada',
      value: 120,
    });

    const response = await request(app).delete(`/incidents/${body.id}`).set('Authorization', id);

    expect(response.status).toEqual(204);
  });
});
