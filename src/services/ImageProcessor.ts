import sharp, { Sharp } from 'sharp';
import path from 'path';
import { fileExists } from '../utilities/fileHelper';

// Class to handle image processing with method chaining for multiple operations
class ImageProcessor {
  private image: Sharp;
  private outputPath: string;

  private constructor(image: Sharp, outputPath: string) {
    this.image = image;
    this.outputPath = outputPath;
  }

  static async create(filename: string): Promise<ImageProcessor> {
    const inputPath = path.resolve(`assets/full/${filename}.jpg`);

    const exists = await fileExists(inputPath);

    if (!exists) {
      throw new Error(`File "${filename}" does not exist`);
    }

    const image = sharp(inputPath);

    const outputPath = path.resolve(
      `assets/processed/${filename}_processed.jpg`,
    );

    return new ImageProcessor(image, outputPath);
  }

  resize(width: number, height: number): this {
    this.image = this.image.resize(width, height);
    this.outputPath = this.outputPath.replace(
      '_processed',
      `_w${width}_h${height}`,
    );
    return this;
  }

  rotate(angle: number): this {
    this.image = this.image.rotate(angle);
    this.outputPath = this.outputPath.replace('.jpg', `_r${angle}.jpg`);
    return this;
  }

  grayscale(): this {
    this.image = this.image.grayscale();
    this.outputPath = this.outputPath.replace('.jpg', `_gray.jpg`);
    return this;
  }

  async toFile(): Promise<string> {
    const exists = await fileExists(this.outputPath);

    if (!exists) {
      await this.image.toFile(this.outputPath);
    }

    return this.outputPath;
  }
}

export default ImageProcessor;
