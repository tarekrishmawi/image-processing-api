import request from 'supertest';
import app from '../index';

describe('Image Processing Suite:', () => {
  it('Image Processor endpoint validation with valid parameters', async () => {
    const response = await request(app).get(
      '/api/images/process?filename=fjord&angle=90&width=1200&height=1200&sigma=2&flip=true&flop=true&grayscale=true',
    );

    expect(response.status).toBe(200);
  });
  it('Image Processor endpoint should return cached image if already processed', async () => {
    const response = await request(app).get(
      '/api/images/process?filename=fjord&angle=90&width=1200&height=1200&sigma=2&flip=true&flop=true&grayscale=true',
    );

    expect(response.status).toBe(200);
  });
  it('Image Processor endpoint should return error if image does not exist', async () => {
    const response = await request(app).get(
      '/api/images/process?filename=notfound&angle=90&width=1200&height=1200&sigma=2&flip=true&flop=true&grayscale=true',
    );

    expect(response.status).toBe(404);
  });
  it('Image Processor endpoint validation should return filename parameter is required', async () => {
    const response = await request(app).get(
      '/api/images/process?angle=90&width=1200&height=1200&sigma=2&flip=true&flop=true&grayscale=true',
    );
    expect(response.status).toBe(400);
    expect(response.text).toBe('filename parameter is required');
  });
  it('Image Proessor endpoint validation should return width must be a number between 1 and 4000', async () => {
    const response = await request(app).get(
      '/api/images/process?filename=fjord&angle=90&width=abc&height=1200&sigma=2&flip=true&flop=true&grayscale=true',
    );
    expect(response.status).toBe(400);
    expect(response.text).toBe('width must be a number between 1 and 4000');
  });

  it('Image Proessor endpoint validation should return height must be a number between 1 and 4000', async () => {
    const response = await request(app).get(
      '/api/images/process?filename=fjord&angle=90&width=1200&height=4001&sigma=2&flip=true&flop=true&grayscale=true',
    );
    expect(response.status).toBe(400);
    expect(response.text).toBe('height must be a number between 1 and 4000');
  });
  it('Image Processor endpoint validation should return sigma must be a number between 0.3 and 1000', async () => {
    const response = await request(app).get(
      '/api/images/process?filename=fjord&angle=90&width=1200&height=1200&sigma=0.1&flip=true&flop=true&grayscale=true',
    );
    expect(response.status).toBe(400);
    expect(response.text).toBe('sigma must be between 0.3 and 1000');
  });
  it('Image Processor endpoint validation should return angle must be a number between 0 and 360', async () => {
    const response = await request(app).get(
      '/api/images/process?filename=fjord&angle=400&width=1200&height=1200&sigma=2&flip=true&flop=true&grayscale=true',
    );
    expect(response.status).toBe(400);
    expect(response.text).toBe('angle must be between 0 and 360');
  });
  it('Image Processor endpoint validation should return flip must be "true" or "false"', async () => {
    const response = await request(app).get(
      '/api/images/process?filename=fjord&angle=90&width=1200&height=1200&sigma=2&flip=maybe&flop=true&grayscale=true',
    );
    expect(response.status).toBe(400);
    expect(response.text).toBe('flip must be "true" or "false"');
  });
  it('Image Processor endpoint validation should return flop must be "true" or "false"', async () => {
    const response = await request(app).get(
      '/api/images/process?filename=fjord&angle=90&width=1200&height=1200&sigma=2&flip=true&flop=maybe&grayscale=true',
    );
    expect(response.status).toBe(400);
    expect(response.text).toBe('flop must be "true" or "false"');
  });
  it('Image Processor endpoint validation should return grayscale must be "true" or "false"', async () => {
    const response = await request(app).get(
      '/api/images/process?filename=fjord&angle=90&width=1200&height=1200&sigma=2&flip=true&flop=true&grayscale=maybe',
    );
    expect(response.status).toBe(400);
    expect(response.text).toBe('grayscale must be "true" or "false"');
  });
});
