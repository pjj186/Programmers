const fs = require('fs');
const [n, ...input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const arr = [];
let answer = "";

for(let i = 0; i < n; i++) {
    let [age, name] = input[i].split(' ');
    arr.push([age, name]);
}

arr.sort((a, b) => {
    if(a[0] !== b[0]) return a[0] - b[0];
})

for (let i = 0; i < n; i++) {
  answer += arr[i][0] + " " + arr[i][1] + '\n';
}

console.log(answer);