const std = [{
        name: 'karan',
        subject: 'Math'
    },
    {
        name: 'shyam',
        subject: 'english'
    }
]
function enrollStd(student) {
    return new Promise(function (resolve, reject) {

        process.nextTick(() => {
            console.log("new student");
        })
        setTimeout(function () {
            std.push(student);
            console.log(std);
            console.log("student enrolled");
            const error = false;
            if (!error) {
                resolve();
            } else {
                reject();
            }

        }, 5000);
    })

}
function getStds() {
    setTimeout(function () {
        console.log("done")
    }, 1000);
}

let new_std = {
    name: 'snowy',
    subject: 'gujarati'
};

enrollStd(new_std).then(function () {
    getStds();
}).catch(function () {
    console.log("error occured");
})
console.log("start");