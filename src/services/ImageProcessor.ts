import sharp, { Sharp } from 'sharp';
import path from 'path';
import { fileExists } from '../utilities/fileHelper';

// Supported other image formats
const IMAGES_FORMATS = ['jpg', 'jpeg', 'png', 'webp'];

class ImageProcessor {
  private image: Sharp;
  private filename: string;
  private extension: string;
  private transformations: string[] = [];

  // CONSTRUCTOR is private to enforce factory method usage
  private constructor(image: Sharp, filename: string, extension: string) {
    this.image = image;
    this.filename = filename;
    this.extension = extension;
  }

  static async create(filename: string): Promise<ImageProcessor> {
    let inputPath: string | null = null; // Try to find the image with supported formats
    let extension = '';

    for (const ext of IMAGES_FORMATS) {
      const possiblePath = path.resolve(`assets/full/${filename}.${ext}`);

      if (await fileExists(possiblePath)) {
        inputPath = possiblePath;
        extension = ext;
        break;
      }
    }

    if (!inputPath) {
      throw new Error(`Image "${filename}" not found`);
    }

    const image = sharp(inputPath);

    return new ImageProcessor(image, filename, extension);
  }

  resize(width: number, height: number): this {
    this.image = this.image.resize(width, height);
    this.transformations.push(`w${width}_h${height}`);
    return this;
  }

  rotate(angle: number): this {
    this.image = this.image.rotate(angle);
    this.transformations.push(`r${angle}`);
    return this;
  }

  blur(sigma: number): this {
    this.image = this.image.blur(sigma);
    this.transformations.push(`b${sigma}`);
    return this;
  }

  flip(): this {
    this.image = this.image.flip();
    this.transformations.push('flip');
    return this;
  }

  flop(): this {
    this.image = this.image.flop();
    this.transformations.push('flop');
    return this;
  }

  grayscale(): this {
    this.image = this.image.grayscale();
    this.transformations.push('gray');
    return this;
  }

  private buildOutputPath(): string {
    const transformSuffix =
      this.transformations.length > 0
        ? '_' + this.transformations.join('_')
        : '';

    return path.resolve(
      `assets/processed/${this.filename}${transformSuffix}.${this.extension}`,
    );
  }

  async toFile(): Promise<string> {
    const outputPath = this.buildOutputPath();

    if (!(await fileExists(outputPath))) {
      await this.image.toFile(outputPath);
    }

    return outputPath;
  }
}

export default ImageProcessor;
