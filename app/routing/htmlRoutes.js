var path = require('path');

module.exports = function(app) {
    // routes that send the user to the correct html page
    app.get("/home", function(req, res) {
        res.sendFile(path.join(__dirname + "../public/home.html"));
    });

    app.get("/howitworks", function(req, res) {
        res.sendFile(path.join(__dirname + "../public/howitworks.html"));
    });

    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname + "../public/survey.html"));
    });

    //if no matching route is found default to home
    app.use(function(req, res) {
        res.sendFile(path.join(__dirname + "../public/home.html"));
    });

};