// talks to rapid API (business logic goes here)

import { sofascore } from "../lib/rapidapi.js";

export async function getStandings({ tournamentId, seasonId, type }) {
  const { data } = await sofascore.get("/tournaments/get-standings", {
    params: { tournamentId, seasonId, type },
  });
  return data; // raw Sofascore payload
}

// export async function getTeamDetail({ teamId }) {
//   const { data } = await sofascore.get('/teams/detail', {
//     params: { teamId },
//   })
//   return data; // raw Sofascore payload
// }

export async function getTeamDetail({ teamId }) {
  if (!teamId) throw new Error("teamId is required");

  const res = await sofascore.get("/teams/detail", {
    params: { teamId },
    // harden parsing:
    responseType: "json",
    transformResponse: [(raw, headers) => {
      // If RapidAPI sends text/plain, try JSON.parse; else return raw
      try { return JSON.parse(raw); } catch { return raw; }
    }],
    headers: { accept: "application/json" },
  });

  // diagnostics
  console.log("↑ Sofascore /teams/detail",
    JSON.stringify({
      status: res.status,
      ctype: res.headers["content-type"],
      dtype: typeof res.data,
      preview: typeof res.data === "string" ? res.data.slice(0, 120) : undefined
    }, null, 2)
  );

  return res.data;
}