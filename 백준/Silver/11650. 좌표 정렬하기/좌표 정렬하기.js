const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let arr = [];
let answer = "";

for (let i = 1; i <= n; i++) {
  let [a, b] = input[i].split(' ').map(Number);
  arr.push([a, b]);
}

arr.sort((a,b) => {
  if(a[0] !== b[0]) return a[0] - b[0];
  else return a[1] - b[1];
})


for (let i = 0; i < n; i++) {
  answer += arr[i][0] + " " + arr[i][1] + '\n';
}

console.log(answer);

