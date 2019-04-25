
var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
  //https://html-erneris.c9users.io
});