// Import express
var express = require("express");

var router = express.Router();
// Database
var Burger = require("../models/burger.js");
// Home route
router.get("/", (req, res) => {
  Burger.selectAll(data => {
    var viewBurger = {burgers: data };
    res.render("index", viewBurger);
  });
});
// Insterting burger into table and database
router.post("/burgers", (req, res) => {
  Burger.insertOne(["burger_name"], [req.body.burger_name], data => {
    res.redirect("/");
  });
});
// Update devoured burgers
router.put("/burgers/:id", (req, res) => {
  var condition = "id = " + req.params.id;

  Burger.updateOne(
    {
      devoured: true
    },
    condition,
    data => {res.redirect("/");}
  );

});


module.exports = router;