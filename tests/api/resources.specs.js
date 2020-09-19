/* Tests for REST API */
// These are integration tests so we need both our API server
// and a test database to query.
const test = require('tape');
const request = require('supertest');
const express = require('express');
const resourceRoutes = require('../server/resources');
const { createTestDb, deleteTestDb, seed, Resource } = require('./testDbUtils');
const { green, red } = require('chalk');

// /resources
// GET - get a collection of them
// POST - make a new one
// /resource/{id}
// GET
// PUT
// DELETE

/* Test Setup */

/* API server and database client */

// Create and seed the test database
createTestDb()
  .then(() => {
    console.log(green('==> Test database created successfully <=='));
  })
  .catch((err) => {
    console.log(
      red(
        'Database could not be created correctly. Check your PostGres server'
      ),
      err.message
    );
  });

seed()
  .then(() => {
    console.log(green('Seeding success!'));
    db.close();
  })
  .catch((err) => {
    console.error(red('Oh no! Something went wrong!'));
    console.error(err);
    db.close();
  });

// Fire up the API server
const app = express();
app.use('/api/resources', resourceRoutes);
const server = request(app); // supertest server
const done = (tapeExpectation, msg, err, res) => {
  // custom callback for tape
  if (err) tapeExpectation.fail(err.message);
  else tapeExpectation.pass(msg);
  tapeExpectation.end();
};

test.skip('GET /resources', (expect) => {
  server
    .get('/api/resources')
    .expect('Content-Type', 'application/json')
    .expect(200)
    .expect((res) => {
      expect.deepEqual(
        res,
        [
          {
            id: 0,
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
    .post('/api/resources')
    .expect('Content-Type', 'application/json')
    .expect(201)
    .end(done.bind(this, expect, ''));
});

test.skip('GET /resources/{id}', (expect) => {
  server
    .get('/api/resources')
    .expect('Content-Type', 'application/json')
    .expect(200)
    .end(done.bind(this, expect, ''));
});

test.skip('PUT /api/resources/{id}', (expect) => {
  server
    .put('/api/resources')
    .expect('Content-Type', 'application/json')
    .expect(200)
    .end(done.bind(this, expect, ''));
});

test.skip('DELETE /resources/{id}', (expect) => {
  server
    .delete('/api/resources')
    .expect('Content-Type', 'application/json')
    .expect(200)
    .end(done.bind(this, expect, ''));
});
