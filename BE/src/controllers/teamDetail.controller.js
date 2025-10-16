import { getTeamDetail } from '../services/sofascore.service.js'

export async function getTeamDetail(req, res) {
  // if using validate middleware:
  const { teamID = 38 } =
    req.validated?.query || req.query;
  
  const data = await getTeamDetail({ teamID });
  res.json(data);
}
