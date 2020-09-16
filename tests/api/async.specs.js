/* global describe context it */
const { expect } = require('chai');

const md5 = require('../../md5');
const promiseMd5 = require('../../promise-md5');

// unclear why this is needed but it is related to the use of
// @babel/register by our mocha test command
// babel needs regeneratorRuntime available globally
// required by @babel/register for when we use async await
const regeneratorRuntime = require('regenerator-runtime');

// Tests async function md5 that expects a callback
describe('#md5()', () => {
  context('with string argument', () => {
    it('should compute MD5 hash', (done) => {
      md5('Kevin Hu', (err, hash) => {
        if (err) return done(err);

        expect(hash)
          .to.be.a('string')
          .that.matches(/^[a-f0-9]{32}$/);
        done();
      });
    });
  });
});

// Tests async function promiseMd5 that is a Promise
// Mocha knows to wait for a Promise to be fulfilled before proceeding.
describe('#promiseMd5()', () => {
  context('with string argument', () => {
    it('should compute MD5 hash', () => {
      return promiseMd5('Kevin Hu').then(function (hash) {
        expect(hash)
          .to.be.a('string')
          .that.matches(/^[a-f0-9]{32}$/);
      });
    });
  });
});

describe('#promiseMd5() async await style', () => {
  context('with string argument using async await syntax', () => {
    it('should compute MD5 hash', async () => {
      const hash = await promiseMd5('Kevin Hu');
      expect(hash)
        .to.be.a('string')
        .that.matches(/^[a-f0-9]{32}$/);
    });
  });
});
