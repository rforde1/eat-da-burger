var express = require("express");

var app = express.Router();
var burger = require("../models/burger.js");
// CRUD
// Route to index
app.get("/", function(req, res) {
  res.redirect("/burger");
});
// Get burger data
app.get("/burger", function(req, res) {
  burger.all(function(burg) {
    res.render("index", { burger_data: burg });
  });
});

// Post it to create
app.post("/burger/new", function(req, res) {
  burger.create(req.body.burger_name, function(result) {
    console.log(result);
    res.redirect("/");
  });
});
// Then 
app.put("/burger/:id", function(req, res) {
  burger.update(req.params.id, function(result) {
    console.log(result);
  });
});

module.exports = app;