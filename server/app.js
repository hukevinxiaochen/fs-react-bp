const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

// Logging middleware
app.use(morgan('dev'));

// Static file server
app.use('/static', express.static(path.resolve(__dirname, '../public')));

// use body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API routes
app.get('/api/errors', (req, res, next) => {
  try {
    throw new Error('we have done something wrong!');
  } catch (err) {
    next(err);
  }
});

// Serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

// Handle 404s
app.use((req, res) => {
  const resourceNotFound = 'The resource you requested could not be located.';
  res.status(404).send(resourceNotFound);
});

// Handle 500 errors
app.use((err, req, res, next) => {
  const extraContent = 'We got this error thing... ';
  res
    .status(500)
    .send(`${extraContent}${err.message}` || 'Internal Server Error');
});

module.exports = app;
