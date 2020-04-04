  
// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  selectAll: cb => {
    orm.selectAll("burgers", response => {
      cb(response);
    });
  },

  insertOne: (columns, values, cb) => {
    orm.insertOne("burgers", columns, values, response => {
      cb(response);
    });
  },

  updateOne: (objColValues, condition, cb) => {
    orm.updateOne("burgers", objColValues, condition, response => {
      cb(response);
    });
  }
};

// Export the database functions for burgers_controller.js
module.exports = burger;