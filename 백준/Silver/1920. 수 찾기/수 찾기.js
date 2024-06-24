const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const arrN = input[1].split(" ").map(Number).sort((a, b) => a - b);
const arrM = input[3].split(" ").map(Number);
const answer = [];

for(let i = 0; i < arrM.length; i++) {
    let start = 0;
    let end = arrN.length - 1;
    let res = false;
    while(start <= end) {
        let mid = Math.floor((start + end) / 2);
        if(arrM[i] < arrN[mid]) {
            end = mid - 1;
        } else if(arrM[i] > arrN[mid]) {
            start = mid + 1;
        } else {
            res = true;
            break;
        }
    }
    if(res === true) {
        answer.push(1);
    } else {
        answer.push(0);
    }
}

console.log(answer.join("\n"));

