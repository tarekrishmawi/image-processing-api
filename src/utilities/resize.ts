import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

const resizeImage = async (
  filename: string,
  width: number,
  height: number,
): Promise<string> => {
  const fullPath = path.resolve(`assets/full/${filename}.jpg`);
  const thumbPath = path.resolve(
    `assets/thumb/${filename}_${width}_${height}.jpg`,
  );

  // Check if resized image already exists (cache)
  if (fs.existsSync(thumbPath)) {
    return thumbPath;
  }

  // Resize and save
  await sharp(fullPath).resize(width, height).toFile(thumbPath);

  return thumbPath;
};

export default resizeImage;
