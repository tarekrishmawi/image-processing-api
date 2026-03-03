import { Request, Response } from 'express';
import blurImage from '../utilities/blur';

const blurController = async (req: Request, res: Response) => {
  const filename = req.query.filename as string;
  const blurLevel = parseInt(req.query.blurLevel as string);

  if (!filename || !blurLevel) {
    return res.status(400).send('Missing required blur parameters');
  }

  try {
    const outputPath = await blurImage(filename, blurLevel);
    return res.sendFile(outputPath);
  } catch {
    return res.status(500).send('Error blurring image');
  }
};

export default blurController;
