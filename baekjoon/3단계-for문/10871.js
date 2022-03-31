const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const input = []
// [[10 5], [1 10 4 9 2 3 8 5 7 6]]

rl.on("line", function(line) {
    input.push(line)
}).on("close", function() {
    let X = +input[0].split(' ')[1] //5
    let A = input[1].split(' ') //[1, 10, 4, 9, 2, 3, 8, 5, 7, 6]
    let result = ''

    for(var i = 0; i < A.length; i++) {
        if(A[i] < X) {
            result += A[i] + ' '
        }
    }
    console.log(result)
    process.exit()
})