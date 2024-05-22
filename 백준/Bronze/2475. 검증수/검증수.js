const fs = require('fs');
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [a, b, c, d, e] = input[0].split(" ").map(Number);

console.log((a**2 + b**2 + c**2 + d**2 + e**2) % 10);