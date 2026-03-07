import { Request, Response } from 'express';
import ImageProcessor from '../services/ImageProcessor';

const processController = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { filename, width, height, angle, sigma, flip, flop, grayscale } =
    req.query as {
      filename?: string;
      width?: string;
      height?: string;
      angle?: string;
      sigma?: string;
      flip?: string;
      flop?: string;
      grayscale?: string;
    };

  if (!filename) {
    res.status(400).send('Filename is required');
    return;
  }

  try {
    const processor = await ImageProcessor.create(filename);

    if (width && height) {
      processor.resize(Number(width), Number(height));
    }

    if (angle) {
      processor.rotate(Number(angle));
    }

    if (sigma) {
      processor.blur(Number(sigma));
    }

    if (flip === 'true') {
      processor.flip();
    }

    if (flop === 'true') {
      processor.flop();
    }

    if (grayscale === 'true') {
      processor.grayscale();
    }

    const outputPath = await processor.toFile();

    return res.sendFile(outputPath);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    res.status(500).send(`Error processing image: ${message}`);
  }
};

export default processController;
