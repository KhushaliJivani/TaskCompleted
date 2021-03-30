var express = require('express');
var dotenv = require('dotenv');
var bodyParser = require('body-parser');
dotenv.config();
app = express();
app.use(bodyParser.json());
app.post('/api/v1/login', function (req, res) {
    if (!req.body.username || !req.body.password) {
        res.status(422).json({
            "message": "required field missing",
            "status": "requires param missing"
        })
    }
    var username = req.body.username;
    var password = req.body.password;

    if (username == "Khushali" && password == "abc@123") {
        res.send("Welcome login success");
    } else {
        res.send("login did not success");
    }
})
app.listen(process.env.PORT, function (err) {
    if (err) {
        throw err;
    }
})