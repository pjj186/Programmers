const fs = require('fs');
const [n, ...input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let answer = "";
const xyArr = [];

for(let i = 0; i < n; i++) {
  const [x, y] = input[i].split(' ').map(Number);
  xyArr.push([x,y]);
}

xyArr.sort((a,b) => {
  if(a[1] !== b[1]) return a[1] - b[1];
  else return a[0] - b[0];
})

for (let i = 0; i < n; i++) {
  answer += xyArr[i][0] + " " + xyArr[i][1] + '\n';
}

console.log(answer);