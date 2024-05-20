const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution() {
  const today = new Date();
  return today.toISOString().split("T")[0];
}

console.log(solution());