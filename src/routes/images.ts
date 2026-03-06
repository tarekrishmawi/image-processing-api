import express from 'express';
import resizeController from '../controllers/resizeController';
import rotateController from '../controllers/rotateController';
import blurController from '../controllers/blurController';
import processController from '../controllers/processController';

const imagesRoute = express.Router();

imagesRoute.get('/resize', resizeController);
imagesRoute.get('/rotate', rotateController);
imagesRoute.get('/blur', blurController);
imagesRoute.get('/process', processController);

export default imagesRoute;
