import sharp from 'sharp';
import path from 'path';
import { fileExists } from './fileHelper';
// Utility function to rotate an image
const rotateImage = async (
  filename: string,
  angle: number = 90,
): Promise<string> => {
  const fullPath = path.resolve(`assets/full/${filename}.jpg`);
  const rotatedPath = path.resolve(
    `assets/rotated/${filename}_rotated_${angle}.jpg`,
  );

  // Check if rotated image already exists (cache)
  if (await fileExists(rotatedPath)) {
    return rotatedPath;
  }

  // Rotate and save
  await sharp(fullPath).rotate(angle).toFile(rotatedPath);

  return rotatedPath;
};

export default rotateImage;
