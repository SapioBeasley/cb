import { Router } from 'express';

import { evidenceController } from '../../controller/evidence.controller';

const evidenceRouter = Router();

evidenceRouter.get('/', evidenceController.get);
evidenceRouter.post('/', evidenceController.create);

export { evidenceRouter };
