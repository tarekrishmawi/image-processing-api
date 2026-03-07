import { promises as fs } from 'fs';
// Utility function to check if a file exists
export const fileExists = async (path: string): Promise<boolean> => {
  try {
    await fs.access(path);
    return true;
  } catch {
    return false;
  }
};
