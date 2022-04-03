const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const input = []

rl.on("line", function(line) {
    input.push(line)
}).on("close", function() {
    //['5', ['20 10 35 30 7']]

    const N = +input[0]
    const arr = input[1].split(' ').map(Number)

    arr.sort(function(a, b) {
        return a - b
    })

    console.log(arr[0], arr[N - 1])
    process.exit()
})