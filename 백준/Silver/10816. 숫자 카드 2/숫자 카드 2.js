const fs = require('fs');
const [_, card, __, targetCard] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const countMap = new Map();

card.split(" ").forEach(num => {
    countMap.set(num, (countMap.get(num) || 0) + 1);
});

const result = targetCard.split(" ").map(num => countMap.get(num) || 0);
console.log(result.join(" "));