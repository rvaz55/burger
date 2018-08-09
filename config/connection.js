let mysql = require("mysql")


//Creating an instance of 'mysql.createConnect({ code to access a DB})'
//then storing it in a VAR/LET named 'connection'

let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Athlon64!!",
    database: "burgers_db"
});

//Caliing the '.connection' method on the the Let connection 
connection.connect(function(err){
    if (err) {
        console.log ("Error Connecting: " + err.stack);
        return; }
        
    { console.log("Connected as ID: " + connection.threadId)}

});

//Setting the LET 'connection' as 'exportable'
module.exports = connection;

