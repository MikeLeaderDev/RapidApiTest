cat > server.js << 'EOF'
const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;
const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY;
const RAPIDAPI_HOST = process.env.RAPIDAPI_HOST;
const RAPIDAPI_BASE = process.env.RAPIDAPI_BASE;

app.get("/health", (_req, res) => res.json({ ok: true }));

app.get("/api/standings", async (req, res) => {
  try {
    const { tournamentId = 17, seasonId = 29415, type = "total" } = req.query;
    const response = await axios.get(`${RAPIDAPI_BASE}/tournaments/get-standings`, {
      params: { tournamentId, seasonId, type },
      headers: {
        "x-rapidapi-host": RAPIDAPI_HOST,
        "x-rapidapi-key": RAPIDAPI_KEY,
      },
      timeout: 15000,
    });
    res.json(response.data);
  } catch (error) {
    console.error(error?.response?.data || error.message);
    res.status(error?.response?.status || 500).json({
      error: "Failed to fetch standings",
      detail: error?.response?.data || error.message,
    });
  }
});

app.listen(PORT, () => console.log(`BE running on http://localhost:${PORT}`));
EOF
