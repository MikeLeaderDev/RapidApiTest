// env, constants, config loader 

import dotenv from "dotenv";
dotenv.config();

export const config = {
  env: process.env.NODE_ENV || "development",
  port: Number(process.env.PORT || 4000),

  rapidapi: {
    baseURL: process.env.RAPIDAPI_BASE,
    host: process.env.RAPIDAPI_HOST,
    key: process.env.RAPIDAPI_KEY,
    timeoutMs: 15000,
  },
};