// Databases

  let mysql = require("mysql");
  var connection;

  if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection({
      port: 3306,
      host: "pqxt96p7ysz6rn1f.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
      user: "yqpfsrgow17en3zq",
      password: "gycj16ot7w9qh7oo",
      database: "qv9ug5ojib8ee60o"
    });
  } else {
    connection = mysql.createConnection({
      port: 3306,
    host: "localhost",
    user: "root",
    password: "password",
    database: "burger_db"
    });
  }


//Connection to host 
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;