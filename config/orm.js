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

}

// function selectAll(){
//     console.log("this is the select all function")
// };
function insertOne(){
   console.log("this is the insert one function")
};
function updateOne(){
    console.log("this is the update one function")
};

//Setting the 'orm' object and it's methods as 'exportable'
module.exports = orm

