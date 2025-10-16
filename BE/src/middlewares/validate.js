import { z } from "zod";

export const validateQuery = (schema) => (req, _res, next) => {
  try {
    req.validated = { query: schema.parse(req.query) };
    next();
  } catch (e) {
    e.status = 400;
    next(e);
  }
};

// Schema example for standings:
export const standingsQuerySchema = z.object({
  tournamentId: z.coerce.number().int().positive().default(17),
  seasonId: z.coerce.number().int().positive().default(29415),
  type: z.string().default("total"),
});