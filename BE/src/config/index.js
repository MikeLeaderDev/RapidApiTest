// env, constants, config loader 

import dotenv from "dotenv";
dotenv.config();

export const config = {
  env: process.env.NODE_ENV || "development",
  port: Number(process.env.PORT || 4000),
  
  sofascore: {
    baseURL: process.env.SOFA_BASE,
    host: process.env.SOFA_HOST,
    key: process.env.SOFA_KEY,
    timeoutMs: 15000,
  },

  sportapi: {
    baseURL: process.env.SPORTAPI_BASE,
    host: process.env.SPORTAPI_HOST,
    key: process.env.SPORTAPI_KEY,
    timeoutMs: 15000,
  }
};