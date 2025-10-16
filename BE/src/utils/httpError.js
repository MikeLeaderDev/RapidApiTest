export class HttpError extends Error {
  constructor(status = 500, message = "Internal Server Error", detail) {
    super(message);
    this.status = status;
    this.detail = detail;
  }
}