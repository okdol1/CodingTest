const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

let input = [];

rl.on("line", function(line){
    input.push(Number(line));
}).on("close", function(){
    let remainder = []
    input.forEach((el) => {
        remainder.push(el % 42)
    })

    remainder = Array.from(new Set(remainder))
    console.log(remainder.length)
    process.exit();
})