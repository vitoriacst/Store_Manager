const statusByErrorCode = {
  'string.min': 422,
  'any.required': 400,
    'number.min': 422,
    'number.positive': 422,
    invalidData: 400,
    notFound: 404,
    alreadyExists: 409,
  };
  module.exports = (err, _req, res, _next) => {
    if (err.isJoi) {
      const status = statusByErrorCode[err.details[0].type] || 500;
      return res.status(status).json({ message: err.details[0].message });
    }
    if (err.code) {
      const status = statusByErrorCode[err.code] || 500;
      return res.status(status).json(err);
    }
    console.error(err);
    return res.status(500).json({ message: 'Internal server error' });
  };
