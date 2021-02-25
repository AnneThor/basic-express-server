'use strict';
const logger = require('../src/middleware/logger.js');
//this is going to require spying on the console

describe('logger middleware functionality', () => {

  let consoleSpy;
  /**it is ok to leave req/res empty bc we are testing how we modify these objects
      * with the specific logger middleware
    **/
  let req = {};
  let res = {};
  let next = jest.fn(); //spy on next method 

  //set up the testing environment (will occur before each test)
  beforeEach(() => {
    //attach to the console 
    //the spy watches the console object, specifically only the log method
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });
  
  //restore the environment to neutral status before next test
  //that is so the console wouldn't have previous text in it from prior tests
  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('should log the request method and url requested for every request', () => {
    logger(req, res, next);
    expect(consoleSpy).toHaveBeenCalled(); //just means console.log was called, not verifying content
  });

  it('calls the next method and does not block ', () => {
    logger(req, res, next);
    //now going to use toHaveBeenCalledWith instead of toHaveBeenCalled because 
    //we want to make sure that it is not passing any parameters(errors)
    expect(next).toHaveBeenCalledWith();         
  });

});