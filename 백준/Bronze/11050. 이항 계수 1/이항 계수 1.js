const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const N = Number(input[0]);
const K = Number(input[1]);

function factorial(n) {
    if(n === 0 || n === 1) {
        return 1;
    }
  return n * factorial(n-1);
}

const answer = factorial(N) / (factorial(N - K) * factorial(K));

console.log(answer);