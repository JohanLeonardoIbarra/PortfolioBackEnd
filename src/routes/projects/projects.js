import { Router } from 'express';
import { ShowProjects, CreateProject } from '../../controller/projects/index.js';

const router = Router();

router.get("/projects", ShowProjects);
router.post("/projects", CreateProject);

export default router;