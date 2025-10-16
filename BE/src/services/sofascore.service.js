// talks to rapid API (business logic goes here)

import { rapid } from "../lib/rapidapi.js";

export async function getStandings({ tournamentId, seasonId, type }) {
  const { data } = await rapid.get("/tournaments/get-standings", {
    params: { tournamentId, seasonId, type },
  });
  return data; // raw Sofascore payload
}

export async function getTeamDetail({ teamId }) {
  const { data } = await rapid.get('/teams/detail', {
    params: { teamId },
  })
  return data; // raw Sofascore payload
}