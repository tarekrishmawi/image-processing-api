import express from 'express';
import imagesRoute from './routes/images';
import { ensureOutputFolder } from './utilities/ensureFolder';
import { logger } from './middleware/logger';
import { validateQueryMiddleware } from './middleware/validation';

const app = express();

app.get('/', (req, res) => {
  res.send('Image Processing API is runninng');
});

app.use('/api/images', [logger, validateQueryMiddleware], imagesRoute);

async function buildFolders() {
  await ensureOutputFolder('assets/processed'); // make sure assets/processed folder exists
  await ensureOutputFolder('logs'); // make sure logs folder exists
}

buildFolders();

export default app;
