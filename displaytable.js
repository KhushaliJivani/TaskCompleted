var express = require('express');
var dotenv = require('dotenv');
//var fs=require('fs');
//var path=require('path');
dotenv.config();
var app = express();
app.get('/api/v1/display_table', function (req, res) {
    //console.log(__dirname);
    res.sendFile(__dirname + "/index.html")
})
app.listen(process.env.PORT, function (err) {
    if (err) {
        throw err;
    }
})