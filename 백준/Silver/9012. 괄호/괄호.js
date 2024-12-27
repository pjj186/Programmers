const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const n = Number(input[0]);
let answer = "";

for(let i = 1; i <= n; i++) {
    const stack = [];
    let isValid = true;
    
    for(let j = 0; j < input[i].length; j++) {
        const item = input[i][j];
        
        if(item === "(") {
            stack.push(item);
        } else {
            if(stack.length === 0) { 
                isValid = false;
                break;
            }
            stack.pop();
        }
    }
    
    answer += (isValid && stack.length === 0) ? "YES\n" : "NO\n";
}

console.log(answer.trim());