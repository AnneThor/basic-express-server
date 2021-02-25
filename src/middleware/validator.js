'use strict';

module.exports = (req, res, next) => {
  if (!req.query.name) {
    throw new Error('Request must have a name property');
  }
  next();
};
