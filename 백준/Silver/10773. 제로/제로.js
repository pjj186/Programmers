const fs = require('fs');
const [k, ...input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

const stack = [];
let answer = 0;

for(let i = 0; i < k; i++) {
  if(input[i] === 0) stack.pop();
  else stack.push(input[i]);
}

stack.forEach((item)=> answer += item);

console.log(answer);