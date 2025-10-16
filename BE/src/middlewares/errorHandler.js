export function errorHandler(err, _req, res, _next) {
  const status = err.status || err.response?.status || 500;
  const body = {
    error: err.message || "Internal Server Error",
    detail: err.detail || err.response?.data || undefined,
  };
  if (process.env.NODE_ENV !== "production") {
    body.stack = err.stack;
  }
  res.status(status).json(body);
}