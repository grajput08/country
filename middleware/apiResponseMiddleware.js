// apiResponseMiddleware.js

function apiResponseMiddleware(req, res, next) {
  res.apiSuccess = function (data = {}, message = "Success") {
    res.status(200).json({
      message,
      data,
    });
  };

  res.apiBadRequest = function (message = "Bad Request") {
    res.status(400).json({
      message,
      data: {},
    });
  };

  res.apiUnauthorized = function (message = "Unauthorized") {
    res.status(401).json({
      message,
      data: {},
    });
  };

  res.apiForbidden = function (message = "Forbidden") {
    res.status(403).json({
      message,
      data: {},
    });
  };

  res.apiNotFound = function (message = "Not Found") {
    res.status(404).json({
      message,
      data: {},
    });
  };

  res.apiServerError = function (message = "Internal Server Error") {
    res.status(500).json({
      message,
      data: {},
    });
  };

  next();
}

module.exports = apiResponseMiddleware;
