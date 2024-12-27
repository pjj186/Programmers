const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const n = Number(input[0]);

let answer = "";

for(let i = 1; i <= n; i++) {
  const stack = [];
  for(let j = 0; j < input[i].length; j++) {
    const item = input[i][j];
    if(item === ")" && stack.includes("(")) {
      stack.pop();
    } else {
      stack.push(item);
    }
  }
  if(stack.length === 0) {
    answer += "YES" + "\n";
  } else {
    answer += "NO" + "\n";
  }
}

console.log(answer);