var friends = require("../data/friends.js");


module.exports = function(app) {
    app.get('/api/friends', function(req, res) {
        res.json(friends);
    })

    app.post('/api/friends', function(req,res) {
        var newMatch = req.body;
        for (var i=0; i < newMatch.scores.length; i++) {
            if (newMatch.scores[i] == "1 (Strongly Disagree)") {
                newMatch.scores[i] = 1;
            } else if (newMatch.score[i] == "5 (Strongly Agree)") {
                newMatch.scores[i] = 5;
            } else {
                newMatch.scores[i] = parseInt(newMatch.scores[i]);
            }

        }
        var differences = [];
        for (var i=0; i < friends[i]; i++) {
            var matchFriends = friends[i];
            var totalDif = 0;

            for (var k=0; k < matchFriends.scores.length; k++) {
                var mathScores = Math.abs(matchFriends.scores[k]-newMatch.scores[k]);
            }
            differences[i] = totalDif;
        }
        var bestFriendNum = differences[0];
		var bestFriendIndex = 0;

		for (var i = 1; i < differences.length; i++) {
			if(differencesArray[i] < bestFriendNum) {
				bestFriendNum = differences[i];
				bestFriendIndex = i;
			}
		}

		friends.push(req.body);

		res.json(friends[bestFriendIndex]);
	})

};