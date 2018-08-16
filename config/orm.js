const connection = require("../config/connection");

const orm = {

    selectAll: function (sqlTableName, callbk){
        //the params above 'sqlTableName' & 'callbk"
        //are defined in the 'burgers.js' file
        var queryString = "SELECT * FROM " + sqlTableName + " ;";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      callbk(result);
    });
    },

    insertOne: function (sqlTableName, cols, vals, callbk){
        
      var queryString = `INSERT INTO ${sqlTableName} ( ${cols}) \n VALUES ('${vals}');`;
      console.log("this is the qString" + queryString)
        connection.query(queryString, vals, function(err, result) {
            if (err) {
              
          
              throw err;
            }
            //console.log("this is the result: ")
            //console.log(result);
            callbk(result);
          });
        
    },

    updateOne: function (sqlTableName, devCol, idCol, burgerID, devouredState , callbk){
      var queryString = `UPDATE ${sqlTableName} SET ${devCol} = ${devouredState} WHERE ${idCol} = ${burgerID}`;
      console.log("from the orm.js:")
    
      console.log(queryString)

      connection.query(queryString, function(err, result) {
          if (err) {
            console.log(queryString)
        
            throw err;
          }
    
          callbk(result);
        });

    },

}


//Setting the 'orm' object and it's methods as 'exportable'
module.exports = orm

