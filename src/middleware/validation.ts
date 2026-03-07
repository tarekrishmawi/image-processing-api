import { Request, Response, NextFunction } from 'express';
import { validationHelper } from '../utilities/validationHelper';
import { ImageQuery } from '../types/ImageQuery';

declare module 'express-serve-static-core' {
  interface Request {
    validatedQuery?: ImageQuery;
  }
}
export const validateQueryMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const result = validationHelper(req);

  if (typeof result === 'string') {
    return res.status(400).send(result);
  }

  req.validatedQuery = result; // attach parsed object to request

  next();
};
