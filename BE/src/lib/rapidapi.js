import axios from "axios";
import { config } from "../config/index.js";

export const sofascore = axios.create({
  baseURL: config.sofascore.baseURL,
  timeout: config.sofascore.timeoutMs,
  headers: {
    "x-rapidapi-host": config.sofascore.host,
    "x-rapidapi-key": config.sofascore.key,
  },
});

export const sportapi = axios.create({
  baseURL: config.sportapi.baseURL,
  timeout: config.sportapi.timeoutMs,
  headers: {
    "x-rapidapi-host": config.sportapi.host,
    "x-rapidapi-key": config.sportapi.key,
  }
})