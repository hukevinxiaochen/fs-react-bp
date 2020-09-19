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

test('GET /locations', (expect) => {})
test('POST /locations', (expect) => {})
test('GET /location', (expect) => {})
test('PUT /location', (expect) => {})
test('DELETE /location', (expect) => {})
