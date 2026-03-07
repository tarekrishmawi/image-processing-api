import { promises as fs } from 'fs';
// Utility function to ensure output folders exist
export async function ensureOutputFolders(): Promise<void> {
  const folders = [
    'assets/thumb',
    'assets/blurred',
    'assets/rotated',
    'assets/processed',
  ];

  for (const folder of folders) {
    await fs.mkdir(folder, { recursive: true });
  }
}
