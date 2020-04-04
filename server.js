const express = require("express");
const methodOverride = require("method-override");
const parser = require("body-parser");

const PORT = process.env.PORT || 8080;

const app = express();


app.use(express.static("public"));
app.use(express.static(__dirname + "/public"));

// parse application/x-www-form-urlencoded
app.use(parser.urlencoded({ extended: true }));

// parse application/json
app.use(parser.json());
app.use(methodOverride("_method"));

// Set Handlebars.
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
const routes = require("./controllers/burgers_controller.js");
app.use("/", routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});