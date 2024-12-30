const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n').map(Number);
const n = input[0];
const sequence = input.slice(1);

function solution(n, sequence) {
    const stack = [];
    let result = [];
    let current = 1;  // 다음에 push할 수
    
    for (let i = 0; i < n; i++) {
        const target = sequence[i];  // 현재 만들어야 할 수
        
        // 현재 수보다 target이 크면, target까지 push
        while (current <= target) {
            stack.push(current++);
            result.push('+');
        }
        
        // 스택의 top이 target과 같은지 확인
        if (stack[stack.length - 1] === target) {
            stack.pop();
            result.push('-');
        } else {
            return 'NO';  // 불가능한 경우
        }
    }
    
    return result.join('\n');
}

console.log(solution(n, sequence));