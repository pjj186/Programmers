const fs = require('fs');
const [n, input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const inputArr = input.trim().split(" ");
let answer = 0;

function isPrime(num) {
    if(num === 1) return false;
    
    for(let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i === 0) return false;
    }
    return true;
}

for(let i = 0; i < n; i++) {
    if(isPrime(Number(inputArr[i]))) {
        answer++;
    }
}

console.log(answer);