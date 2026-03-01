import { Request, Response } from 'express';
import resizeImage from '../utilities/resize';

const resizeController = async (req: Request, res: Response) => {
  const filename = req.query.filename as string;
  const width = parseInt(req.query.width as string);
  const height = parseInt(req.query.height as string);

  if (!filename || !width || !height) {
    return res.status(400).send('Missing required resize parameters');
  }

  try {
    const outputPath = await resizeImage(filename, width, height);
    return res.sendFile(outputPath);
  } catch {
    return res.status(500).send('Error resizing image');
  }
};

export default resizeController;