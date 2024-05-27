const fs = require('fs');
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let [size, ...arr] = input;
let [row, col] = size.split(" ");
arr = arr.map((i) => i.split(""));
const answer = [];

// 정상 체스판을 움직이면서 가장 바꿔야되는 숫자가 적은 경우를 답으로 제출
// 8 * 8 짜리 정상 체스판의 경우 2가지 경우가 있다. W로 시작하거나 B로 시작하는 경우
const white = [
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW"
];

const black = [
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB"
];

//하얀색이 먼저 시작하는 판과 비교하여 다르다면 count
function whiteFirst(x, y) {
  let count = 0;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (arr[i + x][j + y] !== white[i][j]) count++;
    }
  }
  return count;
}

//검은색이 먼저 시작하는 판과 비교하여 다르다면 count
function blackFirst(x, y) {
  let count = 0;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (arr[i + x][j + y] !== black[i][j]) count++;
    }
  }
  return count;
}


// -7(0~7 = 8)씩 해주는 이유는 전체판을 white, black 판에 맞춰 움직인다고 생각
for (let j = 0; j < row - 7; j++) {
  for (let k = 0; k < col - 7; k++) {
    answer.push(whiteFirst(j, k));
    answer.push(blackFirst(j, k));
  }
}

console.log(Math.min(...answer));