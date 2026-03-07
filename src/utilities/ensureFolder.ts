import { promises as fs } from 'fs';
// Utility function to ensure output folder exists
export async function ensureOutputFolder(folder: string): Promise<void> {
  await fs.mkdir(folder, { recursive: true });
}
