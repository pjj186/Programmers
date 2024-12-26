const fs = require('fs');
const [n, ...input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const queue = [];
let answer = "";

const queueMethods = {
    push(num) {
        queue.push(num);
    },
    pop() {
        if(queue.length === 0) return -1;
        return queue.shift();
    },
    size() {
        return queue.length;
    },
    empty() {
        if(queue.length === 0) return 1;
        return 0;
    },
    front() {
        if(queue.length === 0) return -1;
        return queue[0];
    },
    back() {
        if(queue.length === 0) return -1;
        return queue[queue.length - 1];
    }
}

for (let i = 0; i < Number(n); i++) {
  let [method, num] = input[i].split(' ');
  const result = queueMethods[method](num);
  if (method !== 'push') {
      answer += result + "\n";
  }
}

console.log(answer);