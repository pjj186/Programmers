const fs = require('fs');
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');


let answer = [];
const N = Number(input.shift());

const hopeSizes = input[0].split(" ").map(Number);
const [T, P] = input[1].split(" ").map(Number);

let orderT = 0;
let orderP = Math.floor(N / P);
let plusP = N % P;

hopeSizes.forEach((size) => {
    orderT += Math.ceil(size / T);
})

answer.push(orderT);
answer.push(`${orderP} ${plusP}`);

console.log(answer.join("\n"));


