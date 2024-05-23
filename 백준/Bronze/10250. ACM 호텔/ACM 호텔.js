const fs = require('fs');
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// input = ["2", "6 12 10", "30 50 72"]
// ["6", "12", "10"]

// T : 테스트 데이터 수
// H : 호텔 높이
// W : 호텔 너비
// N : 몇 번째 손님인지

const [T] = input.shift();
const result = [];

input.forEach((item) => {
    const [H, W, N] = item.split(' ').map(Number);
    const YY = N % H === 0 ? H :String(N % H);
    const XX = N / H === 0 ? N / H : Math.ceil(N / H).toString().padStart(2,0);
    const YYXX = YY+XX;
    result.push(Number(YYXX).toString());
})

console.log(result.join('\n'));
