import { expect } from 'chai';
const request = require('supertest');
const app = require('../../server/app');

describe('Express Server', () => {
  context('GET /lasjdfkladj', () => {
    it('handles non-existent resources with 404', (done) => {
      // magic of supertest
      request(app).get('/lasjdfkladj').expect(404, done);
    });
  });

  context('GET /static resources', () => {
    it('serves static files', (done) => {
      request(app)
        .get('/static/my-first-svg.png')
        .expect('Content-Type', 'image/png')
        .expect(200, done);
    });
  });
});
