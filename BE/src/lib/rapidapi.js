import axios from "axios";
import { config } from "../config/index.js";

export const rapid = axios.create({
  baseURL: config.rapidapi.baseURL,
  timeout: config.rapidapi.timeoutMs,
  headers: {
    "x-rapidapi-host": config.rapidapi.host,
    "x-rapidapi-key": config.rapidapi.key,
  },
});