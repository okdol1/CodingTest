const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let input = []

rl.on("line", function(line) {
    input = line.split(' ').map((el) => parseInt(el)) //갑 입력
    rl.close() //입력 종료
}).on("close", function() {
    // 입력 종료 후 동작할 코드

    let h = input[0]
    let m = input[1]
    let fastM = m - Number(45)

    // fastM이 음수일경우 60을 더해줌
    if(0 > fastM) {
        fastM += 60
        m = fastM
        // h에 0 또는 1을 입력받을 경우 23, 아닐경우 -1
        if(1 > h) {
            h = 23
        } else {
            h -= 1
        }
    } else {
        m = fastM
    }

    console.log(h + ' ' + m)

    process.exit()
})