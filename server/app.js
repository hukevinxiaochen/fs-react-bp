const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));
app.use((req, res) => {
  const resourceNotFound =
    'The resource you requested could not be located on our servers';
  res.status(404).send(resourceNotFound);
});
module.exports = app;
