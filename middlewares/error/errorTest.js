const statusErrorCode = {
    'any.required': 400,
    'string.min': 422,
    'number.positive': 422,
    'number.min': 422,
    NOT_FOUND: 404,
    BAD_REQUEST: 400,
    ALREADY_EXISTS: 409,
  };
  module.exports = (err, _req, res, _next) => {
    if (err.isJoi) {
      const status = statusErrorCode[err.details[0].type];
      return res.status(status).json({ message: err.details[0].message });
    }
    if (err.code) {
      const status = statusErrorCode[err.code] || 500;
      return res.status(status).json(err);
    }
    return res.status(500).json({ message: 'Internal server error' });
  };
