import { expect } from 'chai';
const request = require('supertest');
const app = require('../../server/app');

describe('GET /lasjdfkladj', () => {
  it('handles non-existent resources with 404', (done) => {
    // magic of supertest
    request(app).get('/lasjdfkladj').expect(404, done);
  });
});
