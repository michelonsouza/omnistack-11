const request = require('supertest');

const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('Profile', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('should be have a list of incidents per ong_id', async () => {
    const { body: { id } } = await request(app).post('/ongs').send({
      name: 'APAD',
      email: 'contato@email.com',
      whatsapp: '47000000000',
      city: 'Rio Do Sul',
      uf: 'SC',
    });

    const expected = {
      title: 'Caso 1',
      description: 'Galiha atropelada',
      value: 120,
    };

    await request(app).post('/incidents').set('Authorization', id).send(expected);

    const response = await request(app).get('/profile').set('Authorization', id);

    expect(response.body).toBeInstanceOf(Array);
    expect(response.body).toHaveLength(1);
    expect(response.body[0]).toHaveProperty('ong_id');
    expect(response.body[0].ong_id).toEqual(id);
  });
});
