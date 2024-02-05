const errorHandler = (error, req, res, next) => {
  const errorName = error.errorName || "INTERNAL_SERVER_ERROR";
  const message = error.message || "Internal Server Error";
  const statusCode = error.statusCode || 500;

  res.status(statusCode).json({
    error: errorName,
    message,
    status: statusCode,
  });
};



module.exports = errorHandler ; 