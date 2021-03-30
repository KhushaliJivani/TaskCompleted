var express = require('express');
var dotenv = require('dotenv');
dotenv.config();
var app = express();
app.get('/api/v1/display_table', function (req, res) {
    res.sendFile(__dirname + "/index.html")
})
app.listen(process.env.PORT, function (err) {
    if (err) {
        throw err;
    }
})
