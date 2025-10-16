import { headers } from "next/headers";

export const dynamic = "force-dynamic"; // always fresh

async function getStandings({
  tournamentId = 17,
  seasonId = 29415,
  type = "total",
} = {}) {
  const h = headers();
  const proto = h.get("x-forwarded-proto") ?? "http";
  const host = h.get("host") ?? "localhost:3000";
  const base = `${proto}://${host}`;

  const params = new URLSearchParams({ tournamentId, seasonId, type });
  const res = await fetch(`${base}/api/standingsEPL?${params.toString()}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
  return res.json();
}

export default async function Page() {
  const data = await getStandings();
  const rows = data?.standings?.[0]?.rows ?? [];

  return (
    <main style={{ padding: 20, fontFamily: "system-ui, Arial, sans-serif" }}>
      <h2>Premier League — Standings</h2>
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: 12 }}>
        <thead>
          <tr>
            {["Pos","Team","MP","W","D","L","GF","GA","GD","Pts"].map(h => (
              <th key={h} style={th}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.id}>
              <td style={td}>{r.position}</td>
              <td style={td}>{r.team?.name}</td>
              <td style={td}>{r.matches}</td>
              <td style={td}>{r.wins}</td>
              <td style={td}>{r.draws}</td>
              <td style={td}>{r.losses}</td>
              <td style={td}>{r.scoresFor}</td>
              <td style={td}>{r.scoresAgainst}</td>
              <td style={td}>{r.scoreDiffFormatted}</td>
              <td style={td}>{r.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

const th = { border: "1px solid #ddd", padding: 8, textAlign: "left", background: "#f5f5f5" };
const td = { border: "1px solid #eee", padding: 8, textAlign: "left" };
