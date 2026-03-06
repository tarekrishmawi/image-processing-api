import sharp, { Sharp } from 'sharp';
import path from 'path';
import fs from 'fs';

class ImageProcessor {
  private image: Sharp;
  private outputPath: string;

  constructor(private filename: string) {
    const inputPath = path.resolve(`assets/full/${filename}.jpg`);

    if (!fs.existsSync(inputPath)) {
      throw new Error('File does not exist');
    }

    this.image = sharp(inputPath);
    this.outputPath = path.resolve(`assets/thumb/${filename}_processed.jpg`);
  }

  resize(width: number, height: number): this {
    this.image = this.image.resize(width, height);
    return this;
  }

  rotate(angle: number): this {
    this.image = this.image.rotate(angle);
    return this;
  }

  grayscale(): this {
    this.image = this.image.grayscale();
    return this;
  }

  async toFile(): Promise<string> {
    await this.image.toFile(this.outputPath);
    return this.outputPath;
  }
}

export default ImageProcessor;
