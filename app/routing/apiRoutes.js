var path = require('path');
var bodyParser = require('body-parser');
var friends = require("../data/friends.js");



// Routes
// ============================================================

module.exports = function(app) {
    app.get('/api/friend', function(req, res) {
        res.json(friends);
    })

    app.post('/api/friend', function(req,res) {
        // console.log(req.body.name);
        // console.log(req.body.scores.length);

        var match = {};
        
        var differenceToBeat = 100;

        for (var i = 0; i < friends.length; i++) {

            var differenceArray = [];
            var totalDifference = 0;


            for (var j = 0; j < friends[i].scores.length; j++) {

                differenceArray.push( Math.abs( req.body.scores[j] - friends[i].scores[j] ) );

            };

            // console.log(differenceArray)

            for (var k = 0; k < differenceArray.length; k++) {
                totalDifference += differenceArray[k];
            }

            // console.log(totalDifference)
            

            if (match == {}) {
                match = friends[i];
                differenceToBeat = totalDifference;
            } else if ( totalDifference < differenceToBeat ) {
                match = friends[i];
                differenceToBeat = totalDifference;
            }

            // console.log(differenceToBeat)

        }


        console.log('Your match is: ' + match.name)

        friends.push(req.body)
        var newMatch = friends[match];
        res.json(newMatch);
        // Push the new person into the friends array.
        
    });

};