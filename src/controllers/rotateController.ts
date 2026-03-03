import { Request, Response } from 'express';
import rotateImage from '../utilities/rotate';

const rotateController = async (req: Request, res: Response) => {
  const filename = req.query.filename as string;
  const angle = parseInt(req.query.angle as string);

  if (!filename || !angle) {
    return res.status(400).send('Missing required rotation parameters');
  }

  try {
    const outputPath = await rotateImage(filename, angle);
    return res.sendFile(outputPath);
  } catch {
    return res.status(500).send('Error rotating image');
  }
};

export default rotateController;
