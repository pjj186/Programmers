const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(' ');
const [a, b] = input.map(Number);

function getGCD(a, b) {
    while(b > 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function getLCM(a, b) {
    return (a * b) / getGCD(a, b);
}

const gcd = getGCD(a, b);
const lcm = getLCM(a, b);

console.log(gcd);
console.log(lcm);