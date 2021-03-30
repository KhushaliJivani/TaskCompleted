function file_operation() {
    const fileData = "ihuhu dgwydu hedbdj udwhwuid wdeydwh whdgyge";
    const fs = require('fs');
    fs.writeFileSync('text1.txt', fileData);
    var newData = fs.readFile('text1.txt', 'utf8', function (err, data) {
        if (err) {
            throw err;
        }
        console.log(data);
        fs.writeFileSync('text2.txt', `${data}`);
        fs.appendFile('text2.txt', " khushali", function (err) {
            if (err) {
                throw err;
            }
        })
        fs.copyFile("text1.txt", "text3.txt", (err) => {
                if (err) {
                    throw err;
                } else {
                    console.log("content of copied files");
                    fs.readFile("text3.txt", "utf8", function (err, data) {
                        if (err) {
                            throw err;
                        } else {
                            console.log(data);
                        }
                    });
                }
            }


        )
    });
}
const http = require('http');
const requestListener = function (req, res) {
    res.write("hello world");
    file_operation();
    res.end("done");
}
const server = http.createServer(requestListener);
server.listen(8000, () => console.log("done"));