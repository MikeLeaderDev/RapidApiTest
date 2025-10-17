// all routers under /api 

import { Router } from "express";
import standingsRoutes from "./standings.routes.js";
import teamsRoutes from "./teams.routes.js"

const router = Router();

router.use(standingsRoutes);
router.use(teamsRoutes);

export default router;
