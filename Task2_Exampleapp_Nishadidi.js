var express = require('express');
var dotenv = require('dotenv');
dotenv.config();
var app = express();
app.get('/', function (req, res) {
    res.send('First through express');
});
app.get('/second', function (req, res) {
    res.send('first through express on second page');
});
let promise = new Promise(function (resolve, reject) {
    if (app.listen(process.env.PORT, () => {
            console.log(`server on port=${process.env.PORT}`);

        })) {
        resolve("resolve");
    } else {
        reject("reject");
    }
}).then(function (value) {
    console.log(value)
}).catch(function (value) {
    console.log(value)
});