const fs = require('fs');
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N] = input;

// 종말의 수란 어떤 수에 6이 적어도 3개 이상 연속으로 들어가는 수
// 제일 작은 종말의 수는 666, 그 다음 큰 수는 1666
// 첫번쨰 영화의 이름은 세상의 종말 666, 두번째 영화의 이름은 세상의 종말 1666
// N번째 영화의 제목은 세상의 종말 (N번째로 작은 종말의 수)
// ex) 187번쨰 영화의 이름은 66666

// 단순히 맨 뒤에 666을 넣고 앞자리를 늘리는 문제는 아님.
// "가장 작은 종말의 수는 666" 이때 N은 1임
// 당연히 그러면 그 다음 종말의 수는 1666인데, 숫자는 667, 668, 669 이런식으로 증가하다가
// 1666이 된다? 그게 N이 2인 경우

// 그러면 카운트를 세야함.
let count = 0;

// EndNum의 초깃값을 665로 한 이유는, count가 1이되려면 가장 처음 만나야하는 종말의숫자가 666 이기 때문
let EndNum = 665;

// 무한루프 돌려.
while(true) {
    EndNum++; // 무한루프를 돌리면서 종말의 숫자를 찾을것임
    if(EndNum.toString().includes("666")) {
        // 666을 포함하면 카운트를 1 올려.
        count++;
    }
    
    if(Number(N) === count) {
        // N과 count가 같아지는 시점에 무한루프를 끝낸다.
        break;
    }
}

// N번째 종말의 숫자 완성.
console.log(EndNum);
