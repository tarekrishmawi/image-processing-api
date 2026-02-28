import express from 'express';
import imagesRoute from './routes/images';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Image Processing API is running 🚀 . moving into the next phase of development');
});

app.use('/api/images', imagesRoute);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

export default app;