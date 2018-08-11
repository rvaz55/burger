// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
      orm.selectAll("burgers", function(res) {
          //parameters passed in 'orm.selectAll('param1', 'param2')
          //are used in the 'orm.js' file by the orm object
        cb(res, console.log("this was triggered in the burger.js file in 'models' folder"));
      });
    },
    create: function(cols, vals, cb) {
        orm.insertOne("burgers", "burger_name", vals, function(res) {
            //parameters passed in 'orm.selectAll('param1', 'param2')
            //are used in the 'orm.js' file by the orm object
          
            cb(res);
        });
      }
}

module.exports = burger;
