/* Example of asynchronous code that uses callbacks */
const crypto = require('crypto');

module.exports = function md5(string, callback) {
  const withCallback = typeof callback === 'function';

  try {
    const hash = crypto.createHash('md5').update(string).digest('hex');
    if (withCallback) callback(null, hash);
  } catch (e) {
    if (withCallback) callback(e);
    else throw e;
  }
};
