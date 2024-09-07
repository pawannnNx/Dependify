import { Router } from 'express';
import { getPackage } from '../controllers/packageController';

const router = Router();

router.get('/package', getPackage);

export default router;
