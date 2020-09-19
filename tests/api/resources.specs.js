const test = require('tape');
const app = require('../../server/app');
const request = require('supertest');
const server = request(app);

// REST API

// /resources
// GET - get a collection of them
// POST - make a new one
// /resource/{id}
// GET
// PUT
// DELETE

// tape-supertest custom error handler
const done = (tapeExpectation, msg, err, res) => {
  if (err) tapeExpectation.fail(err.message);
  else tapeExpectation.pass(msg);
  tapeExpectation.end();
};

test.skip('GET /resources', (expect) => {
  server
    .get('/resources')
    .expect('Content-Type', 'application/json')
    .expect(200)
    .expect((res) => {
      expect.deepEqual(
        res,
        [
          {
            id: 1,
            attr1: 'one',
            attr2: 'two',
          },
        ],
        'has correct structure'
      );
    })
    .end(done.bind(this, expect, ''));
});

test.skip('POST /resources', (expect) => {
  server
    .post('/resources')
    .expect('Content-Type', 'application/json')
    .expect(201)
    .end(done.bind(this, expect, ''));
});

test.skip('GET /resources/{id}', (expect) => {
  server
    .get('/resources')
    .expect('Content-Type', 'application/json')
    .expect(200)
    .end(done.bind(this, expect, ''));
});

test.skip('PUT /resources/{id}', (expect) => {
  server
    .put('/resources')
    .expect('Content-Type', 'application/json')
    .expect(200)
    .end(done.bind(this, expect, ''));
});

test.skip('DELETE /resources/{id}', (expect) => {
  server
    .delete('/resources')
    .expect('Content-Type', 'application/json')
    .expect(200)
    .end(done.bind(this, expect, ''));
});
