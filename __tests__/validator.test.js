'use strict';
const validator = require('../src/middleware/validator.js');


describe('validator functionality', () => {

  let req = {};
  let res = {};
  let next = jest.fn(); //spy on the next method

  afterEach(() => {
    req = {};
  });

  it('should call next if the request is properly formatted', () => {
    req.query = {name: 'Anne'};
    validator(req, res, next);
    expect(next).toHaveBeenCalledWith(); //called once with no params/errors
  });

  it('should return an error if there is no name req.query.name parameter', () => {
    expect(() => {
      validator(req, res, next);
    }).toThrow();
  });

});