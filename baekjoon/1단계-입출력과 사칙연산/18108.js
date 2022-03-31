const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let input

rl.on("line", function(line) {
    input = Number(line)
    rl.close()
}).on("close", function() {
    console.log(input - 543)
})