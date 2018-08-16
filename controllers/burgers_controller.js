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
router.get("/", function(req, res){
    //Linking up the SQL query here 
    burgers.all(function(data){
        let hbsObject = {
            burgers: data
            };
           // console.log(hbsObject.burgers)
   
        ///Rendering the HanldeBarsHTML
        res.render('index', {
            burgers: hbsObject.burgers
            });
        })

})

/////////////////////////////////////////////////////////
//This POSt handles the 'create burger' api req
router.post("/api/burgers", function(req, res){
    //The 'vals' below is being passed to the 'burgers.create(){};'
    var vals = req.body.burger;
    //Linking up the SQL query here 
    burgers.create(vals, function(data){
       // console.log("this is the response: ")
        //console.log(response)
        let hbsObject = {
            burgers: data
            };
           
        ///Rendering the HanldeBarsHTML
        res.render('index', {
            burgers: hbsObject.burgers
            });
        })
})
/////////////////////////////////////////////////////////
//This PUT handles the 'devour burger' api req
router.put("/api/burgers/:id", function(req, res){
    //Linking up the SQL query here 
    const condition = `id = ${req.params.id}`;
    console.log(`Controller: this is the burger id: ${condition}`);
    const vals = req.body
    const burgerID = req.body.burger.burgerID
    const devouredState = req.body.burger.devouredState

    burgers.devourBurger(burgerID, devouredState, function(data){

        let hbsObject = {
            burgers: data
            };
          ///Rendering the HanldeBarsHTML
          res.render('index', {
            burgers: hbsObject.burgers
            });
    })   
})


// Export routes for server.js to use.
module.exports = router;
