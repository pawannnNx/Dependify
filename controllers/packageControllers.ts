import { Request, Response } from 'express';

export const getPackage = (req: Request, res: Response) => {
  res.json({ package: 'Sample Package' });
};
