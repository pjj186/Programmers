const fs = require('fs');
const [min, max] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

let answer = "";
function isPrime(num) {
    if(num === 1) return false;
    
    for(let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i === 0) return false;
    }
  
    return true;
}

for(let i = min; i <= max; i++) {
  if(isPrime(i)) {
    answer += i + "\n";
  }
}

console.log(answer);

