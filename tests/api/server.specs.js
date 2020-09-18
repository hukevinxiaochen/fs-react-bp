const test = require('tape');
const app = require('../../server/app');
const request = require('supertest');

// tape gives us test, used to create new tests
// it takes an optional name string
// and requires a callback that fires with a new test object
// once all preceding tests have finished
// - convention calls this test object `t`
// - we use `expect` because it reads nicely.

// for simplicity's sake, we should restrict ourselves to using 
// deepEqual and pass and fail

// supertest server
const server = request(app);

// tape-supertest custom error handler
const done = (tapeExpectation, msg, err, res) => {
  if (err) tapeExpectation.fail(err.message);
  else tapeExpectation.pass(msg);
  tapeExpectation.end();
};

test('GET /lasjdfkladj', (expect) => {
  // magic of supertest
  server
    .get('/lasjdfkladj')
    .expect(404)
    .end(
      done.bind(this, expect, 'serves 404 to requests for non-existent files')
    );
});

test('GET /static', (expect) => {
  server
    .get('/static/my-first-svg.png')
    .expect('Content-Type', 'image/png')
    .expect(200)
    .end(
      done.bind(
        this,
        expect,
        'serves static file my-first-svg.png successfully'
      )
    );
});

test('GET / serves index.html', (expect) => {
  server.get('/').expect(200).end(done.bind(this, expect, 'serves index.html'));
});

test('GET /api/errors', (expect) => {
  server
    .get('/api/errors')
    .expect(500)
    .expect((res) =>
      expect.deepEqual(
        res.text,
        'We got this error thing... we have done something wrong!',
        'should serve custom internal server error message'
      )
    )
    .end(
      done.bind(
        this,
        expect,
        'uses something other than Express default error handler'
      )
    );
});
