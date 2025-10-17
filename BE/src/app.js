// express app wiring (middlewares + routes)

import express from "express";
import cors from "cors";
import morgan from "morgan";
import routes from "./routes/index.js";
import { notFound } from "./middlewares/notFound.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import { sanitizeQuery } from "./middlewares/sanitize.js";


export function createApp() {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(morgan("dev"));
  app.use(sanitizeQuery); 

  app.get("/health", (_req, res) => res.json({ ok: true }));

  app.use("/api", routes); // all API routes mounted here

  app.use(notFound);
  app.use(errorHandler);

  return app;
}
