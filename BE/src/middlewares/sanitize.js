export function sanitizeQuery(req, _res, next) {
  for (const [k, v] of Object.entries(req.query)) {
    if (typeof v === "string") req.query[k] = v.trim();
  }
  next();
}
