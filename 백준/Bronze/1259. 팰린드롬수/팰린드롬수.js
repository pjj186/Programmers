const fs = require('fs');
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 1. 짝수는 팰린드롬 수 에서 제외
// 2. 중앙의 인덱스를 구하기
// 3. 배열의 맨 앞, 맨 끝에 포인터 역할을 하는 변수를 만들고 각각 값을 비교

const answer = [];

for(let i = 0; i < input.length - 1; i++) {
    let centerIdx = Math.floor(input[i].length / 2); // 중앙의 인덱스
    let leftIdx  = 0; // 앞 포인터
    let rightIdx = input[i].length - 1; // 끝 포인터
    let isCorrect = true;
    
    // 팰린드롬 수 인지 판단하는 반복문
    for(let j = 0; j < centerIdx; j++) {
        if(input[i][leftIdx] !== input[i][rightIdx]) {
            isCorrect = false;
        } else {
            leftIdx++;
            rightIdx--;
        }
    }
    
    if(isCorrect) {
        answer.push("yes");
    } else {
        answer.push("no");
    }
}

console.log(answer.join("\n"));
