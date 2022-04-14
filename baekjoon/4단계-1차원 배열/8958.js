const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

let input = []

rl.on("line", function(line){
    input.push(line)
}).on("close", function(){
    let num = Number(input[0])

    for(var i = 1; i <= num; i++) {
        let data = input[i].split('')
        let count = 0 
        let result = 0
        
        for(var n = 0; n < data.length; n++) {
            if(data[n] === 'O') {
                result += 1 + count
                count++
            } else {
                count = 0
            }
        }
        console.log(result)
    }
    process.exit();
})