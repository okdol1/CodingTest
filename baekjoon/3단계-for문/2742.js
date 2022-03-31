const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.on("line", function(line) {
    const num = Number(line)
    let answer = ''
    for(let i = 0; i < num; i++) {
        answer += (num - i) + '\n'
    }
    console.log(answer)
    rl.close()
}).on("close", function() {
    process.exit()
})