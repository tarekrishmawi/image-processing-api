import { Request, Response, NextFunction } from 'express';
import { promises as fs } from 'fs';
import { fileExists } from '../utilities/fileHelper';
import { ensureOutputFolder } from '../utilities/ensureFolder';
import path from 'path';

export const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(`Request received: ${req.method} ${req.url}`);

  const logPath = path.join(__dirname, '../../logs/access.log');

  if (!fileExists(path.dirname(logPath))) {
    ensureOutputFolder(path.dirname(logPath));
  }

  fs.appendFile(logPath, `Request received: ${req.method} ${req.url}\n`);

  next();
};
