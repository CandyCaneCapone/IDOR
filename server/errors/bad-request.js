class BadRequestError extends Error {
  constructor(message) {
    super(message);
    this.errorName = "BAD_REQUEST_ERROR";
    this.statusCode = 400;
  }
}


module.exports = BadRequestError ; 