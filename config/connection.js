// Databases
var mysql = require("mysql");


  // Local connection
  connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "password",
    database: "burger_db"
  });


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