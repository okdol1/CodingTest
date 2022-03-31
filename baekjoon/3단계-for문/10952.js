const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = []

rl.on("line", function(line) {
    input.push(line)
}).on("close", function() {
    // [[1 1], [2 3], [3 4], [9 8], [5 2]. [0 0]]
    for(var i = 0; i < input.length; i++) {
        let first = +input[i].split(' ')[0]
        let second = +input[i].split(' ')[1]
        let result = first + second
        if(result > 0) {
            console.log(result)
        }
    }
    process.exit()
})