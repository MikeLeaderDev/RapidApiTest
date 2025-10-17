import { getTeamDetail } from '../services/sofascore.service.js'

export async function teamDetail(req, res, next) {
  try {
    const { teamId } = req.query;        // will be trimmed by sanitizeQuery
    const data = await getTeamDetail({ teamId });
    if (!data || (typeof data === "string" && data.trim() === "")) {
      return res.status(502).json({ error: "Upstream returned empty body" });
    }
    res.json(data);
  } catch (e) {
    console.error("teamDetail error:", e.response?.status, e.response?.data || e.message);
    next(e);
  }
}
