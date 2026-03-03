import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

const blurImage = async (
  filename: string,
  blurAmount: number,
): Promise<string> => {
  const fullPath = path.resolve(`assets/full/${filename}.jpg`);
  const blurPath = path.resolve(
    `assets/blurred/${filename}_blurred_${blurAmount}.jpg`,
  );

  // Check if blurred image already exists (cache)
  if (fs.existsSync(blurPath)) {
    return blurPath;
  }

  // Blur and save
  await sharp(fullPath).blur(blurAmount).toFile(blurPath);

  return blurPath;
};

export default blurImage;
