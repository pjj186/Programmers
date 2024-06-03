const fs = require('fs');
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [_, N] = input.shift().split(" ").map(Number);

// 이분탐색을 위해 오름차순으로 정렬
const lanCables = input.map(Number).sort((a, b) => a - b);

let max = Math.max(...lanCables);
let min = 1;

while(min <= max) {
    let mid = parseInt((min + max) / 2);
    // 카운터 구하기
    let count = lanCables.reduce((acc, cur) => {
    return acc + parseInt(cur / mid);
  }, 0);
    
    
   // [1 ~~~~~~~~~~~~~~~~ max] 인 배열에서
   // count === N을 만족하는 수를 이분탐색으로 찾는것
    
  if (count >= N) {
    min = mid + 1;
  } else {
    max = mid - 1;
  }
  // max를 반환하는 이유 : 최댓값
}

console.log(max);
