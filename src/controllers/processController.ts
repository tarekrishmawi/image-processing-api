import { Request, Response } from 'express';
import ImageProcessor from '../services/ImageProcessor';

const processController = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const query = { ...req.query };
  const { filename, width, height, angle, sigma, flip, flop, grayscale } =
    query;

  try {
    const processor = await ImageProcessor.create(filename as string);

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

    if (error instanceof Error && error.message.includes('not found')) {
      res.status(404).send(error.message);
      return;
    }

    res.status(500).send(`Error processing image: ${message}`);
    return;
  }
};

export default processController;
