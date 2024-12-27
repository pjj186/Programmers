const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n").map(item => Number(item));

const n = input.shift();  
const arr = input.sort((a,b) => a - b);

console.log(arr.join("\n"));