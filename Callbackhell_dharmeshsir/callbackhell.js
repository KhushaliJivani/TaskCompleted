const {
    error
} = require('console');
var fs = require('fs');
const content = "hello how are you are you ok and fine or not please tell me if anything goes wrong with you and ask somwething if you have any doubt ok";

function callback() {
    console.log("hello");
    fs.writeFile("text1.txt", content, function (err) {
        if (err) {
            throw err;
        } else {
            fs.readFile('text1.txt', 'utf8', function (err, data) {
                if (err) {
                    throw err;
                } else {
                    console.log(data);
                    setTimeout(function () {
                        fs.writeFile('text2.txt', content, function (err) {
                            if (err) {
                                throw err;
                            } else {
                                for (i = 0; i < 3000; i++) {
                                    fs.readFile('read.txt', 'utf8', function (err, data) {
                                        if (err) {
                                            throw err;
                                        } else {
                                            fs.writeFile("write.txt", `${data}`, function (err) {
                                                if (err) {
                                                    throw err;
                                                } else {
                                                    fs.readFile('read.txt', 'utf8', function (err, data) {
                                                        if (err) {
                                                            throw err;
                                                        } else {
                                                            for (i = 0; i < 10000; i++) {
                                                                setTimeout(() => {
                                                                    console.log(data);
                                                                }, 2000);
                                                            }
                                                        }
                                                    })
                                                }
                                            });
                                        }
                                    });
                                }
                            }
                        });
                    }, 3000);
                }
            });
        }
    });
}
callback();
process.nextTick(() => {
    function func1() {
        return new Promise((resolve, reject) => {
            resolve('inside promise');
        });
    }
    func1().then((value) => {
        console.log(value);
    });
    console.log('before');
    func1();
    console.log('after');
})