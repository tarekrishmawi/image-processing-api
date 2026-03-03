import express, { Request, Response } from 'express';
import resizeController from '../controllers/resizeController';
import rotateController from '../controllers/rotateController';
import blurController from '../controllers/blurController';

const imagesRoute = express.Router();

// Match the base path '/api/images'
imagesRoute.get('/', (req: Request, res: Response) => {
  const action = req.query.action;

  if (action === 'resize') {
    return resizeController(req, res);
  }

  if (action === 'rotate') {
    return rotateController(req, res);
  }
  if (action === 'blur') {
    return blurController(req, res);
  }

  res
    .status(400)
    .send('Please specify a valid action (resize, rotate, or blur)');
});

export default imagesRoute;
