export class ApiError extends Error {
  constructor(message, status = -1) {
    super(message);
    this.status = status;
  }
}
