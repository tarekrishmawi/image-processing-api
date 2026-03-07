import express from 'express';
import imagesRoute from './routes/images';
import { ensureOutputFolder } from './utilities/ensureFolder';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Image Processing API is runninng');
});

app.use((req, res, next) => {
  console.log(`Request received: ${req.method} ${req.url}`);
  next();
});

app.use('/api/images', imagesRoute);

async function startServer() {
  await ensureOutputFolder(); // make sure folder exists

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

startServer();

export default app;
