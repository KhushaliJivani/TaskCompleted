var express = require('express');
var dotenv = require('dotenv');
var fs = require('fs');
dotenv.config();
var app = express();
app.get('/api/v1/home', function (req, res) {
    res.send("Hello Welcome dear");
})
app.listen(process.env.PORT, function (err) {
    if (err) {
        throw err;
    }
})