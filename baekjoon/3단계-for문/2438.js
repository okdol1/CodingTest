const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let num

rl.on("line", function(line) {
    num = +line
    rl.close()
}).on("close", function() {
    let result = ''
    for(let i = 0; i < num; i++) {
        result += '*'
        console.log(result)
    }
    process.exit()
})