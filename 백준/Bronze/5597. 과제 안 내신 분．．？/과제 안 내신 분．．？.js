const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
// 풀이
function solution() {
  const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
  const answer = numbers.filter((item) => !input.includes(item)).sort((a, b) => a - b);

  
  return answer.join('\n');
}

console.log(solution());