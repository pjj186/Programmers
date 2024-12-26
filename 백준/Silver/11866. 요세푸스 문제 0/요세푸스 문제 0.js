let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let N = Number(input[0]);
let K = Number(input[1]);

const people = Array.from({length: N}, (_, i) => i + 1);
const result = [];
let currentIndex = 0;

while (people.length > 0) {
    currentIndex = (currentIndex + K - 1) % people.length;

    result.push(people.splice(currentIndex, 1)[0]);
}



console.log(`<${result.join(", ")}>`);