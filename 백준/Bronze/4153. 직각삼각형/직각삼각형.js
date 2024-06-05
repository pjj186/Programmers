const fs = require('fs');
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let answer = [];

for(let i = 0; i < input.length - 1; i++) {
    const [A, B, C] = input[i].split(" ").map(Number).sort((a, b) => a - b);
    
    if(C**2 === A**2 + B **2) {
        answer.push("right");
    }else {
        answer.push("wrong");
    }
}

console.log(answer.join("\n"));
