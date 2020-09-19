/* Functions to Create and Destroy the test database */
const pgtools = require('pgtools');
const Sequelize = require('sequelize');
const { red } = require('chalk');
// Test Database - environment assumed to have PostGres server running
// pgtools assumes these environment variables
// PGHOST='localhost'
// PGUSER=process.env.USER
// PGDATABASE=process.env.USER
// PGPASSWORD=null
// PGPORT=5432

const config = {
  user: process.env.USER,
  password: null,
  port: 5432,
  host: 'localhost',
};
const testDbName = 'test-bp-db';

const createTestDb = async () => {
  pgtools.createdb(config, testDbName, (err, res) => {
    // Create test db
    if (err) {
      console.log(err, res);
      process.exit(-1);
    }
    console.log(res);
  });
};

const deleteTestDb = async () => {
  pgtools.dropdb(config, testDbName, (err, res) => {
    // DROP our test database
    if (err) {
      console.log(err, res);
      process.exit(-1);
    }
    console.log(res);
  });
};

/* Define, Sync, and Seed our Test Database*/
process.env.DATABASE_URL = `postgres://${config.host}:${config.port}/${testDbName}`;
const db = new Sequelize(process.env.DATABASE_URL); // Establish connection
const Resource = db.define('resource', {
  // define a test Model
  attr1: Sequelize.STRING,
  attr2: Sequelize.STRING,
});
const resources = [{ attr1: 'one', attr2: 'two' }];
const seed = async (num=1) => {
  try {
    await db.sync({ force: true });
    for (let i = 0; i < num; i++) {
      await Resource.create({
        attr1: `${i} value1`,
        attr2: `${i} value2`,
      });
    }
  } catch (err) {
    console.log(red(err.stack));
  }
};

module.exports = {
  createTestDb,
  deleteTestDb,
  Resource,
  seed,
};
