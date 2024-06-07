const fs = require('fs');
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, ...arr] = input;
const answer = [];

for(let i = 0; i < Number(N); i++) {
    let rank = 1;
    const [weight, height] = arr[i].split(" ").map(Number);
    
    // 비교 시작
    for(let j = 0; j < Number(N); j++) {
        const [cWeight, cHeight] = arr[j].split(" ").map(Number);
        if(weight < cWeight && height < cHeight) {
            rank++;
        }
    }
    
    answer.push(rank);
}

console.log(answer.join(" "));