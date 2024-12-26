const fs = require('fs');
const [_, card, __, targetCard] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const obj = {};
let answer = "";

targetCard.split(" ").forEach((el) => {
  obj[el] = 0;
})

card.split(" ").forEach((el) => {
  if(Object.hasOwn(obj, el)) {
    obj[el] += 1;
  }
})

targetCard.split(" ").forEach((el) => {
  answer += obj[el] + " ";
})

console.log(answer);