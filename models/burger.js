// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    allBurgers: function(cb) {
      orm.selectAll("burgers", function(res) {
          //parameters passed in 'orm.selectAll('param1', 'param2')
          //are used in the 'orm.js' file by the orm object
        cb(res);
      });
    },
    createBurger: function(vals, cb) {
        orm.insertOne("burgers","burger_name", vals, function(res) {
            //parameters passed in 'orm.selectAll('param1', 'param2')
            //are used in the 'orm.js' file by the orm object
         
            cb(res);
        });
      },
      devourBurger: function(burgerID, devouredState, cb) {
        orm.updateOne("burgers", "devoured","id", burgerID, devouredState, function(res) {
            //parameters passed in 'orm.selectAll('param1', 'param2')
            //are used in the 'orm.js' file by the orm object
          
            cb(res);
        });
      },
      deleteBurger: function(burgerID, cb) {
        orm.deleteOne("burgers", "id", burgerID,function(res) {
            //parameters passed in 'orm.selectAll('param1', 'param2')
            //are used in the 'orm.js' file by the orm object
          cb(res);
        });
      },
}

module.exports = burger;
