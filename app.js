var express = require('express');

var app = express();

app.get('/', function (req, res) {
  res.send('Nodejs for github for testing lab');
});

app.listen(process.env.PORT || 6000);

module.exports = app;
