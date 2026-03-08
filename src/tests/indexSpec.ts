import request from 'supertest';
import app from '../index';

describe('Test API Endpoints:', () => {
  it('Main server endpoint should return 200', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });

  it('Image Processor endpoint should return 200', async () => {
    const response = await request(app).get(
      '/api/images/process?filename=fjord&angle=90&width=1200&height=1200&sigma=2&flip=true&flop=true&grayscale=true',
    );
    expect(response.status).toBe(200);
  });

  it('API/Images/Process should return 400 , BAD REQUEST', async () => {
    const response = await request(app).get('/api/images/process');
    expect(response.status).toBe(400);
  });
});
