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
      console.log(queryString)
      console.log("coming from orm.js file")
      callbk(result);
    });
    },

    insertOne: function (sqlTableName, cols, vals, callbk){
        
      var queryString = `INSERT INTO ${sqlTableName} ( ${cols}) \n VALUES ('${vals}');`;
        console.log("im the orm", queryString);
        console.log(`cols: ${cols}`) ;
         ;
        console.log(`vals: ${vals}`) 

        connection.query(queryString, vals, function(err, result) {
            if (err) {
              console.log(queryString)
              console.log(vals)
          
              throw err;
            }
      
            callbk(result);
          });
        
    },

    updateOne: function (newBurger , callbk){

    },

}


//Setting the 'orm' object and it's methods as 'exportable'
module.exports = orm

