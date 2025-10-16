import { Router } from "express";
import { standingsEPL } from "../controllers/standings.controller.js";
import { validateQuery, standingsQuerySchema } from "../middlewares/validate.js";

const router = Router();

// GET /api/standingsEPL?tournamentId=17&seasonId=29415&type=total
router.get("/standingsEPL", validateQuery(standingsQuerySchema), standingsEPL);

export default router;
