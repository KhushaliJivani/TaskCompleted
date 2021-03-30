const http = require('http');
const dotenv = require('dotenv');
dotenv.config();
var promise = new Promise(function (resolve, reject) {
    if (http.createServer((req, res) => {
            res.write('Hello world');
            res.end();
        }).listen(process.env.PORT, () => {
            console.log(`Server up on ${process.env.PORT}`)
        })) {
        resolve("resolve");
    } else {
        reject("reject");
    }
}).then(function (value) {
    console.log("resolve");
}).catch(function (value) {
    console.log("reject");
})