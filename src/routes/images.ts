import express from 'express';
import processController from '../controllers/processController';

const imagesRoute = express.Router();

imagesRoute.get('/process', processController);

export default imagesRoute;
