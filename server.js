var express = require('express');
var app = express();
var path = require('path');
var mysql = require('mysql');


var con = mysql.createConnection({
  hostname: "erneris-html-6500297",
  user: "erneris",
  password: "",
  database: "c9"
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(8080, function () {
  console.log('Puslapis pasileido https://html-erneris.c9users.io!');
});
app.get('/uzregistruoti', (req, res) => {


con.connect(function(err) {
  if (err) throw err;
  var sql = "INSERT INTO emails(email) VALUE ('"+req.body.Email+"')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted, ID: " + result.insertId);
  });
});

});