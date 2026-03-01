import express from 'express';
import resizeController from '../controllers/resizeController';
import rotateController from '../controllers/rotateController';

const router = express.Router();

router.get('/resize', resizeController);
router.get('/rotate', rotateController);

export default router;