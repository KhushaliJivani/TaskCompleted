var express = require('express');
var dotenv = require('dotenv');
var bodyParser = require('body-parser');
dotenv.config();
var app = express();
app.use(bodyParser.json());
app.post('/api/v1/userdata', function (req, res) {
    if (!req.body.name || !req.body.number1 || !req.body.number2 || !req.body.languages || !req.body.dialects || !req.body.phoneNumber) {
        var arrayTocheckReq = ['name', 'number1', 'number2', 'languages', 'dialects', 'phoneNumber'];
        var reqData = req.body;
        var reqKeys = Object.keys(reqData);
        var missing = [];
        for (var i = 0; i < arrayTocheckReq.length; i++) {
            if (reqKeys.includes(arrayTocheckReq[i])) {
                continue;
            } else {
                missing.push(arrayTocheckReq[i]);
            }
        }
        res.status(422).json({
            "message": "required field missing",
            "data": missing,
            "status": "requires param missing",
        })

    }
    var name = req.body.name;
    var number1 = req.body.number1;
    var number2 = req.body.number2;
    var language = req.body.languages;
    var dialects = req.body.dialects;
    var phoneNumber = req.body.phoneNumber;
    var arr = [];
    language.forEach(element => {
        if (element.includes("a")) {
            arr.push(element);
        }
    })

    var lengthNum1 = number1.length;
    var lengthNum2 = number2.length;
    var mulArray = [];

    if (lengthNum1 === lengthNum2) {
        var concatNumber1 = number1[0].concat(number2[0]);
        for (var i = 1; i < lengthNum1; i++) {
            var mulNumber = number1[i] * number2[i];
            mulArray.push(mulNumber);
        }
        var newConcatMul = mulArray.join(" ");
        var finalNumber = concatNumber1.concat(newConcatMul);
    } else {

        res.send("error");

    }
    var concatedLanguages = language.concat(dialects);
    var finalObjectRes = {
        "message": `hii ${name}`,
        "data": {
            "languagesWithA": arr,
            "allLanguages": concatedLanguages,
            "countryCode": phoneNumber.slice(0, 3),
            "phone": phoneNumber.slice(3, 13),
            "number": finalNumber,
        },
        "status": "success"
    }
    res.json(finalObjectRes);
});

app.listen(process.env.PORT, function (err) {
    if (err) {
        throw err;
    }
})