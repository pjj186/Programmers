const fs = require('fs');
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, ...arr] = input;

// 1. 길이가 짧은 것부터
// 2. 길이가 같으면 사전 순으로
// 3. 단, 중복된 단어는 하나만 남기고 제거해야 한다.

// 먼저, 중복을 없애기 위해 Set 자료구조 사용
const uniqueWords = Array.from(new Set(arr));


uniqueWords.sort((a, b) => {
    if (a.length === b.length) {
        // 길이가 같으면 사전순
        return a.localeCompare(b);
    }
    return a.length - b.length;
});


console.log(uniqueWords.join("\n"));