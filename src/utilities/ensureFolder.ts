import { promises as fs } from 'fs';
// Utility function to ensure output folder exists
export async function ensureOutputFolder(): Promise<void> {
  const folder = 'assets/processed';

  await fs.mkdir(folder, { recursive: true });
}
