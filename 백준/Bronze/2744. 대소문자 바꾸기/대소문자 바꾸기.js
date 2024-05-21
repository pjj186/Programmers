const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let answer = "";

const str = input[0].split("").forEach((item) => {
    item.toLowerCase() === item ? answer += item.toUpperCase() : answer += item.toLowerCase();
});

console.log(answer);
