'use strict';
const supertest = require('supertest');
const { server } = require('../src/server.js');
const mockRequest = supertest(server);
//creates fake server in memory while tests run 
//you're doing that instead of starting the real server (hence why you don't need the start call)

describe('Server functionality tests', () => {
    
  it('should return 500 status on a server error route', async () => {
    await mockRequest.get('/person')
      .then(reply => {
        expect(reply.status).toBe(500);
      });
  });

  it('should return 404 on a missing route', async () => {
    await mockRequest.get('/non-existing-route')
      .then(reply => {
        expect(reply.status).toBe(404);
        expect(reply.body.message).toEqual('Page not found');
      });
  });

  it('should return 404 on an invalid method', async ()=> {
    await mockRequest.put('/person')
      .then(reply => {
        expect(reply.status).toBe(404);
      });
  });

  it('should return 200 if there is a valid request', async () => {
    await mockRequest.get('/person?name=Anne')
      .then(reply => {
        expect(reply.status).toBe(200);
        expect(reply.body.name).toBe('Anne');
      });
  });

});
