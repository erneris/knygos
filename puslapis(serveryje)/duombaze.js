var mysql = require('mysql');

var con = mysql.createConnection({
  hostname: "erneris-html-6500297",
  user: "erneris",
  password: "",
  database: "c9"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM emails", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});