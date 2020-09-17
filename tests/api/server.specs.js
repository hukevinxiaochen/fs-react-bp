import { expect } from 'chai';
const request = require('supertest');
const app = require('../../server/app');


describe('Express Server', () => {
  const server = request(app);
  context('GET /lasjdfkladj', () => {
    it('handles non-existent resources with 404', (done) => {
      // magic of supertest
      server.get('/lasjdfkladj').expect(404, done);
    });
  });

  context('GET /static resources', () => {
    it('serves static files', (done) => {
      server
        .get('/static/my-first-svg.png')
        .expect('Content-Type', 'image/png')
        .expect(200, done);
    });
  });

  context('GET /', () => {
    it('serves your index.html', (done) => {
      server
      .get('/').expect(200, done);
    })
  })
});
