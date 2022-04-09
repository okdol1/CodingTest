const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

let input = [];

rl.on("line", function(line){
    input.push(line);
}).on("close", function(){
    let a = +input[0]
    let b = input[1].split(' ').map(Number)
    let maxN = Math.max(...b)
    let result = 0

    for(var i = 0; i < a; i++){
        result += b[i] / maxN * 100
    }

    console.log(result / a)
    
    process.exit();
})