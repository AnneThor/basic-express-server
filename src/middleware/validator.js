'use strict';

module.exports = (req, res, next) => {
  if (!req.query.name) {
    next('Request must have a name property');
  }
  next();
};
