const express = require("express");
const bodyParser = require("body-parser");


//Creating the instance of express and 
//storing it in the app variable then naming the port
const PORT = process.env.PORT || 3000;
const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

//Here I tell Express to use Body-Parser module
//to handle data parsing 
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


//-----------------------------------------
// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
//-----------------------------------------

//Importing the API routes contained within the 'burgers_controller.js' file
//On the 'burgers_controllers.js' the 'express.Router()' function
//and the routes linked to that 'router' object
let routes = require("./controllers/burgers_controller.js")

//Using the '.use' method on the 'app' obj; the 'use' method allows the 
//program to handle HTTP methods and specifies middleware as the callback function
app.use(routes)

//Then we make sure that the server we created 
//is LISTENING 
app.listen(PORT, function(){
    console.log("Server listening on: http://localhost:" + PORT);
});

