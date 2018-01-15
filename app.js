var express     =   require("express"),
    app         =   express(),
    bodyParser  =   require("body-parser");
    
//Config
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

//Initial route
app.get("/", function(req,res) {
    res.render("landing");
});

//Server starts to listen
app.listen(3000, function(){
  console.log("Daris is listening for justWatched...");
});