var express = require("express");
var router = express.Router();
const { SHT31 } = require('sht31-node')

router.get("/", function(req, res, next) {
    const sht31 = new SHT31(0x44, 2);
    
    sht31.readSensorData().then(data => {
        const temperature = Math.round((data.temperature * 1.8 + 32)*100)/100
        res.send(`${temperature}`);
    });
});

module.exports = router;