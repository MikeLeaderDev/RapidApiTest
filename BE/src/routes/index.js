// alll routers under /api 

import { Router } from "express";
import standingsRoutes from "./standings.routes.js";

const router = Router();

router.use(standingsRoutes);
// router.use(teamsRoutes); 
// later: router.use('/teams', teamsRoutes); router.use('/players', playersRoutes);
// router.use()

export default router;
