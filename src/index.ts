import express from 'express';
import imagesRoute from './routes/images';
import { ensureOutputFolder } from './utilities/ensureFolder';
import { logger } from './middleware/logger';
import { validateQueryMiddleware } from './middleware/validation';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Image Processing API is runninng');
});

app.use('/api/images', [logger, validateQueryMiddleware], imagesRoute);

async function startServer() {
  await ensureOutputFolder('assets/processed'); // make sure assets/processed folder exists
  await ensureOutputFolder('logs'); // make sure logs folder exists

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

startServer();

export default app;
