import { Request, Response } from 'express';
import ImageProcessor from '../services/ImageProcessor';

const processController = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { filename, width, height, angle, grayscale } = req.query as {
    filename?: string;
    width?: string;
    height?: string;
    angle?: string;
    grayscale?: string;
  };

  if (!filename) {
    res.status(400).send('Filename is required');
    return;
  }

  try {
    const processor = new ImageProcessor(filename);

    if (width && height) {
      processor.resize(Number(width), Number(height));
    }

    if (angle) {
      processor.rotate(Number(angle));
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
