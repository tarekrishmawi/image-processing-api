import { Request } from 'express';
import { ImageQuery } from '../types/ImageQuery';

export const validationHelper = (req: Request): ImageQuery | string => {
  const { filename, width, height, sigma, flip, flop, angle, grayscale } =
    req.query;

  if (!filename || typeof filename !== 'string') {
    return 'filename parameter is required';
  }

  const parsed: ImageQuery = {
    filename,
  };

  if (width) {
    const w = Number(width);
    if (isNaN(w) || w <= 0 || w > 4000)
      return 'width must be a number between 1 and 4000';
    parsed.width = w;
  }

  if (height) {
    const h = Number(height);
    if (isNaN(h) || h <= 0 || h > 4000)
      return 'height must be a number between 1 and 4000';
    parsed.height = h;
  }

  if (sigma) {
    const s = Number(sigma);
    if (isNaN(s) || s < 0.3 || s > 1000)
      return 'sigma must be between 0.3 and 1000';
    parsed.sigma = s;
  }

  if (angle) {
    const a = Number(angle);
    if (isNaN(a) || a < 0 || a > 360) return 'angle must be between 0 and 360';
    parsed.angle = a;
  }

  if (flip) {
    if (flip !== 'true' && flip !== 'false') {
      return 'flip must be "true" or "false"';
    }
    parsed.flip = flip === 'true';
  }

  if (flop) {
    if (flop !== 'true' && flop !== 'false') {
      return 'flop must be "true" or "false"';
    }
    parsed.flop = flop === 'true';
  }

  if (grayscale) {
    if (grayscale !== 'true' && grayscale !== 'false') {
      return 'grayscale must be "true" or "false"';
    }
    parsed.grayscale = grayscale === 'true';
  }

  return parsed;
};
