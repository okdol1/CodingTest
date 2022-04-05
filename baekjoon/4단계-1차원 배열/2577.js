const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

let input = [];

rl.on("line", function(line){
    input.push(Number(line));
}).on("close", function(){
    let number = input[0] * input[1] * input[2];
    let numberStr = number.toString().split('').map(Number);
    //[1, 7, 0, 3, 7, 3, 0, 0]
    
    let count
    for(let i = 0; i < 10; i++) {
        count = 0
        for(let j = 0; j < numberStr.length; j++) {
            if(numberStr[j] === i) {
                count++
            }
        }
        console.log(count)
    }
    process.exit()
})