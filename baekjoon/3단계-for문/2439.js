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
    let blank = ''
    let star = ''
    // i -> 1, 2, 3, 4, 5
    for(let i = 1; i <= num; i++) {
        star += '*'
        // j -> 4, 3, 2, 1, 0
        for(let j = 0; j < num - i; j++) {
            blank += ' '
        }
        console.log(blank + star)
        blank = ''
    }
    process.exit()
})