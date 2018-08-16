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
      connection.query(queryString, function(err, result) {
          if (err) {
            throw err ;
          }
    
          callbk(result);
        });

    },

    deleteOne: function (sqlTableName, idCol, burgerID, callbk){
        
        var queryString = `DELETE FROM ${sqlTableName} WHERE ${idCol} = ${burgerID}`;
      connection.query(queryString, function(err, result) {
          if (err) {
            throw err ;
          }
    
          callbk(result);
        });

    }

}


//Setting the 'orm' object and it's methods as 'exportable'
module.exports = orm

