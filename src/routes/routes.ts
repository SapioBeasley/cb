import { Request, Response, Router } from 'express';

import { evidenceRouter } from './evidence';

const router = Router();

router.use('/evidence', evidenceRouter);

router.get('/', (_req: Request, res: Response) => {
  return res.json({ success: true });
});

export { router };
