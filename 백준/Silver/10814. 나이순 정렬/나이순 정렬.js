const fs = require('fs');
const [n, ...input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const members = [];

for (let i = 0; i < Number(n); i++) {
  let [age, name] = input[i].split(" ");
  members.push({ age: Number(age), name, index: i });
}

members.sort((a, b) => {
  if(a.age !== b.age) {
    return a.age - b.age;
  }
  return a.index - b.index;
});

const result = members.map(member => `${member.age} ${member.name}`).join('\n');
console.log(result);
