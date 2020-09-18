const test = require('tape');
const app = require('../../server/app');
const request = require('supertest');
const server = request(app);
