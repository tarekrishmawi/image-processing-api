import ImageProcessor from '../services/ImageProcessor';
import fs from 'fs';

describe('ImageProcessor service class Unit Tests', () => {
  const filename = 'bigben'; // .png image

  it('should create an ImageProcessor instance', async () => {
    const processor = await ImageProcessor.create(filename);

    expect(processor).toBeDefined();
  });

  it('should process image with multiple image operations', async () => {
    const processor = await ImageProcessor.create(filename);

    const output = await processor
      .resize(300, 300)
      .rotate(90)
      .blur(2)
      .flip()
      .flop()
      .grayscale()
      .toFile();

    expect(fs.existsSync(output)).toBeTrue();
  });

  it('should return cached image if already processed', async () => {
    const processor = await ImageProcessor.create(filename);

    const output1 = await processor.resize(200, 200).toFile();

    const processor2 = await ImageProcessor.create(filename);

    const output2 = await processor2.resize(200, 200).toFile();

    expect(output1).toEqual(output2);
  });

  it('should throw error if image does not exist', async () => {
    await expectAsync(ImageProcessor.create('notfound')).toBeRejected();
  });
});

// clean up test images from processed folder
afterAll(() => {
  const dir = 'assets/processed';
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    fs.unlinkSync(`${dir}/${file}`);
  });
});
