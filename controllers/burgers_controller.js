//Importing 'express' & creating a variable to store
//a 'Router' object through the express module
let express = require("express")
const router = express.Router();

//Importing the 'burgers.js' in order to access
//the SQL queries contained in the file 'burger.js'
let burgers = require("../models/burger.js")

//Creating the API URL routes
//Then within the logic of each route, linking the route 
//to trigger: 1)render the appropriate HandleBars HTML 
//            2)appropriate SQL query
router.get("/index", function(req, res){
    //Linking up the SQL query here 
    burgers.all(function(data){
        let hbsObject = {
            burgers: data
            };
       //console.log(hbsObject)
        //console.log(hbsObject.burgers[0].burger_name)
        // console.log(hbsObject.burgers.burger_name)
        console.log("this was triggered in the burgers_controllers.js")
        ///Rendering the HanldeBarsHTML
        res.render('index', {
            burgers: hbsObject.burgers
            });
        })

})

/////////////////////////////////////////////////////////
router.post("/api/burgers", function(req, res){
    //Linking up the SQL query here 
    burgers.create([
        "burger_name", 
    ],
    req.body.burger_name ,
    function(result){
        console.log("on the controllers.js file")
        res.json({ id: result.insertId })
        console.log("on the controllers.js file")
        ;
        });

})


// Export routes for server.js to use.
module.exports = router;
