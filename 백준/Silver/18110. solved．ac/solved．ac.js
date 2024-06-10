const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let N = Number(input.shift());
let count = Math.round(N * 0.15);
let sorted = input.map(Number).sort((a, b) => a - b);

let slicedArray = sorted.slice(count, sorted.length - count);
let sum = slicedArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
let avg  = Math.round(sum / slicedArray.length);

if(N === 0) {
    console.log(0);
} else {
    console.log(avg);    
}



