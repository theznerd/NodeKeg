var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
    // Generate fake temperature data
    var temperature = Math.round(((Math.random()*5) + 32 + Math.random())*100)/100
    res.send(`${temperature}`);
});

module.exports = router;