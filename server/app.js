const express = require('express');

const app = express();

app.use((req, res, next) => {
  res.sendStatus(200);
});
module.exports = app;
