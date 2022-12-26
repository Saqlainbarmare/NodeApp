const errorHandler = (err, req, res, next) => {
  const statusCode = res.status === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  console.log(err.message, err.stack);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

export { errorHandler };
