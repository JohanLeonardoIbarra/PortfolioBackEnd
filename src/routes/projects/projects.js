import { Router } from 'express';
import { ShowProjects } from '../../controller/projects/index.js';

const router = Router();

router.get("/show", ShowProjects);

export default router;