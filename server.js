//dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//set up express
var app = express();
var PORT = process.env.PORT || 3000;

//set up express to parse data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static('app/public'));


var apiRoutes = require('./app/routing/apiRoutes.js'); 
var htmlRoutes = require('./app/routing/htmlRoutes.js');

apiRoutes(app);
htmlRoutes(app);

//start server
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });