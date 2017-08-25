var path = require('path');
var bodyParser = require('body-parser');
var friends = require(path.join(__dirname, "../data/friends.js"));
var orm=require ("../mysqljs/orm.js");


// Routes
// =============================================================
module.exports = function(app){

	// Search for Specific Character (or all characters) then provides JSON
	// app.get('/api/friend', function(req, res){
    //     console.log("please work")
	// 	// If the user provides a specific character in the URL...
	// 	if(req.params.friends){

	// 		// Then display the JSON for ONLY that character.
	// 		// (Note how we're using the ORM here to run our searches)
	// 		orm.allFriends(req.params.friends, function(data){
	// 			res.json(data);
	// 		})
	// 	}

	// 	// Otherwise...
	// 	else {
	// 		// Otherwise display the data for all of the Friends. 
	// 		// (Note how we're using the ORM here to run our searches)
	// 		var data =  orm.allFriends(function(data){
	// 			res.json(data); });
	// 		};

	// });

	// If a user sends data to add a new character...
	app.post('/api/friend', function(req, res){
        console.log("hey2")
		// Take the request...
        var friend = req.body;
        console.log("hey");

		// Then send it to the ORM to "save" into the DB.
		orm.addFriend(friend, function(data){
            res.send(data);
		});

	})
}

// module.exports2 = function(app) {
//     app.get('/api/friend', function(req, res) {
//         res.json(friends);
//     })

//     app.post('/api/friend', function(req,res) {
//         console.log(req.body.name);
//         console.log(req.body.scores.length);

//         var match = {};
        
//         var differenceToBeat = 100;

//         for (var i = 0; i < friends.length; i++) {

//             var differenceArray = [];
//             var totalDifference = 0;


//             for (var j = 0; j < friends[i].scores.length; j++) {

//                 differenceArray.push( Math.abs( req.body.scores[j] - friends[i].scores[j] ) );

//             };

//             console.log(differenceArray)

//             for (var k = 0; k < differenceArray.length; k++) {
//                 totalDifference += differenceArray[k];
//             }

//             console.log(totalDifference)
            

//             if (match == {}) {
//                 match = friends[i];
//                 differenceToBeat = totalDifference;
//             } else if ( totalDifference < differenceToBeat ) {
//                 match = friends[i];
//                 differenceToBeat = totalDifference;
//             }

//             console.log(differenceToBeat)

//         }


//         console.log('Your match is: ' + match.name)

//         // Push the new person into the friends array.
//         friends.push(req.body)

//         // Return the friends array as JSON.
//         // res.json(friends)
//         res.json(match)

//     });

// };