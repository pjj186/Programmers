const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

let [n, ...arr] = input;
arr = arr.map((item) => item.split(' ').map(Number));
let answer = '';

for (let i = 0; i < arr.length; i += 2) {
  let count = 0;
  const priorities = arr[i + 1]; // 큐 (FIFO)
  let location = arr[i][1]; // 찾는 문서의 위치

  while (true) {
    const max = Math.max(...priorities); // 현재 큐에서 가장 높은 중요도
    const number = priorities.shift(); // 첫 번째 문서를 꺼냄
      
    if (number === max) {
      // 방금 뽑은 문서가 중요도가 가장 높다면 인쇄횟수 증가
      // (중요도가 높은 문서부터 뽑기때문에)
      count++;
      if (location === 0) { // 방금 뽑은 문서가 찾는 문서인가? 
        answer += count + '\n';
        break;
      }
    } else { // 나중에 인쇄하기 위해 뒤로 보냄
      priorities.push(number);
    }

    if (location === 0) {
      // 현재 궁금한 문서의 위치가 맨 앞으로 왔는데 해당 값이 우선순위가 가장 높지 않으면, 맨 뒤로 가기때문에 위치를 조정함
      location = priorities.length - 1;
    } else {
      // 위에서 Push 할 때 마다 궁금한 문서의 위치가 앞으로 한칸씩 당겨지므로, 
      location--;
    }
  }
}

console.log(answer.trim());