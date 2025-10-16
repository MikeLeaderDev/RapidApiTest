import { getStandings } from "../services/sofascore.service.js";

export async function standingsEPL(req, res) {
  // if using validate middleware:
  const { tournamentId = 17, seasonId = 29415, type = "total" } =
    req.validated?.query || req.query;

  const data = await getStandings({ tournamentId, seasonId, type });
  res.json(data);
}
