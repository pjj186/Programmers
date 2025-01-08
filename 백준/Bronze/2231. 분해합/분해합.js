const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString();
const n = parseInt(input);

let num = 0;

for(let i = 1; i < n; i++) {
    const strNum = String(i);
    let deSum = 0;
    let sum = 0;
    
    for(let j = 0; j < strNum.length; j++) {
        deSum += Number(strNum[j]);
        sum = i + deSum;
    }
    
    if(sum == n) {
        num = i;
        break;
    }
}

console.log(num);