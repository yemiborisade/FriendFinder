var express = require("express");
var router = express.Router();
var myFriends = require("../data/friend");
var path = require("path");

//Sets up the Express app to handle data parsing
router.use(express.urlencoded({
    extended: true
}));
router.use(express.json());

// Routes
// =============================================================
router.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});
// Displays all friends
router.get("/api/friend", function (req, res) {
    return res.json(myFriends);
});

//Create New Friend
router.post("/api/friend", function (req, res) {
    var newGuy = req.body;
    var matcHit = [];

    for (var buddy = 0; buddy < myFriends.length; buddy++) {
        
        for (var index = 0; index < newGuy.scores.length; index++) {
            if (parseInt(myFriends[buddy].scores[index]) >= parseInt(newGuy.scores[index])) {
                currentTally = currentTally + (parseInt(myFriends[buddy].scores[index]) - parseInt(newGuy.scores[index]));
            } else {
                ? = ? + (parseInt(newGuy.scores[index]) - parseInt(myFriends[buddy].scores[index]));
            };
        };
        
        if (currentTally < bestMatch) {
            matcHit = [];
            ? = ?;
            matcHit.push(myFriends[buddy]);
        } else if(? == ?) {
            matcHit.push(myFriends[buddy]);
        };

        ? = 0;
    };

    myFriends.push(newGuy);
    res.json(matcHit);

});


module.exports = router;