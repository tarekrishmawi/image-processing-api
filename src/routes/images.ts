import express from 'express';
import processImage from '../controllers/imagesController';

const router = express.Router();

router.get('/', processImage);

export default router;