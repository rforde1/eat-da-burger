const express = require("express");

const app = express.Router();

const burger = require("../models/burger");

app.get("/", (req,res) =>{
  burger.all(function(result){
    const allBurgers = {
      burgers : result
    }
    console.log(allBurgers)
    res.render("index", allBurgers);
  });
});

app.post("/burgers", (req, res) => {
  burger.insertOne(["burger_name"], [req.body.burger_name], data => {
    res.redirect("/");
  });
});

app.put("/burgers/:id", (req, res) => {
  var oneBurger = "id = " + req.params.id;

  burger.updateOne(
    {
      devoured: true
    },
    oneBurger,
    data => {
      res.redirect("/");
    }
  );
});

module.exports = app;