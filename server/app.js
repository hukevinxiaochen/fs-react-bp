const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

// Logging middleware
app.use(morgan('dev'));

// Static file server
app.use('/static', express.static(path.resolve(__dirname, '../public')));

// // Serve index.html
// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../public/index.html'));
// });

// Handle 404s
app.use((req, res) => {
  const resourceNotFound =
    'The resource you requested could not be located on our servers';
  res.status(404).send(resourceNotFound);
});

module.exports = app;
