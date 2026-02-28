import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Image Processing API is running 🚀 . moving into the next phase of development');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

export default app;