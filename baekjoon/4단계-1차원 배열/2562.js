const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const input = []

rl.on("line", function(line) {
    input.push(line)
}).on("close", function() {

    const arr = input.map(Number)
    const maxN = Math.max(...arr)

    console.log(maxN)
    console.log(arr.indexOf(maxN)+1)
    process.exit()
})