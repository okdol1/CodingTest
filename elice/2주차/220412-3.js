// 비교 연산 검사기
// 입력이 숫자, 비교 연산자, 숫자 순서로 공백을 기준으로 주어집니다.
// 해당 비교 연산이 참이면 true, 거짓이면 false를 출력해보세요.

// 입력예시
// 100 < 300

// 출력예시
// true

const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

let input = []

rl.on("line", function(line){
    input.push(line.split(" "))
}).on("close", function(){
    let num1 = Number(input[0])
    let num2 = Number(input[2])
    let op = input.split(' ')[1]

    switch(op) {
        case '>':
            console.log(num1 > num2)
            break;
        case '=':
            console.log(num1 = num2)
            break;
        case '<':
            console.log(num1 < num2)
            break;
    }
    process.exit();
})