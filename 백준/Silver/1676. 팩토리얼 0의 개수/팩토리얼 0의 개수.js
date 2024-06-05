const fs = require('fs');
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);

function Factorial(num) {
  let answer = 0
  if(num === 0) answer
  for(let i = 1; i <= input; i++){
    
    if(i % 5 === 0) answer++
    if(i % 25 === 0) answer++
  	if(i % 125 === 0) answer++
  }
  return answer
}

console.log(Factorial(N))