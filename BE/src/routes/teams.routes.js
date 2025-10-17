import { Router } from "express";
import { teamDetail } from "../controllers/teamDetail.controller.js";
// optional validation:
// import { validateQuery } from "../middlewares/validate.js";
// import { teamDetailQuerySchema } from "../schemas/teams.schema.js";

const router = Router();

// GET /api/teams/detail?teamId=38
// router.get("/teams/detail", validateQuery(teamDetailQuerySchema), teamDetail);
router.get("/teams/detail", teamDetail);

export default router;
