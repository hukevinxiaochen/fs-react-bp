const test = require('tape');

const md5 = require('../md5');
const promiseMd5 = require('../promise-md5');

// unclear why this is needed but it is related to the use of
// @babel/register by our mocha test command
// babel needs regeneratorRuntime available globally
// required by @babel/register for when we use async await
const regeneratorRuntime = require('regenerator-runtime');

// Tests async function md5 that expects a callback
test('#md5()', (expect) => {
  md5('Kevin Hu', (err, hash) => {
    expect.deepEqual(typeof hash, 'string', 'returns a string');
    expect.deepEqual(
      hash,
      '91bd815fd220418e5e106bae4f78dc2b',
      'computes the correct md5 hash value'
    );
    expect.end();
  });
});

/* MOCHA style tests */
// // Tests async function promiseMd5 that is a Promise
// // Mocha knows to wait for a Promise to be fulfilled before proceeding.
// describe('#promiseMd5()', () => {
//   context('with string argument', () => {
//     it('should compute MD5 hash', () => {
//       return promiseMd5('Kevin Hu').then(function (hash) {
//         expect(hash)
//           .to.be.a('string')
//           .that.matches(/^[a-f0-9]{32}$/);
//       });
//     });
//   });
// });
//
// describe('#promiseMd5() async await style', () => {
//   context('with string argument using async await syntax', () => {
//     it('should compute MD5 hash', async () => {
//       const hash = await promiseMd5('Kevin Hu');
//       expect(hash)
//         .to.be.a('string')
//         .that.matches(/^[a-f0-9]{32}$/);
//     });
//   });
// });
