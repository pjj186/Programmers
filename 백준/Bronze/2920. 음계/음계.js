const fs = require('fs');
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 1 ~ 8 까지 차례대로 연주한다면 "ascending"
// 8 ~ 1 까지 차례대로 연주한다면 "descending"
// 둘 다 아니면 "mixed"

// 문제에서  c d e f g a b C 가 주어진 이유가 있을것임.
// 주어진 숫자를 영어로 치환하여 순서를 비교하는게 좋지 않을까?

// input Example1 : 1 2 3 4 5 6 7 8 === c d e f g a b C
// input Example2 : 8 7 6 5 4 3 2 1 === C b a g f e d c
// input Example3 : 8 1 7 2 6 3 5 4

// 1. 우선 숫자를 key, value를 알파벳으로 가지는 객체를 만든다.
const obj = {
    1 : "c",
    2 : "d",
    3 : "e",
    4 : "f",
    5 : "g",
    6 : "a",
    7 : "b",
    8 : "C"
};

const arr = input[0].split(" "); // ['1','2','3','4','5','6',7','8'] 과 같은 꼴의 배열

// 2. 정답 문자열을 선언
const ascending = "cdefgabC";
const descending = "Cbagfedc";

// 3. input 배열을 순회하며, 알파벳을 저장할 변수 선언
let result = "";

// 4. 숫자에 해당하는 알파벳을 result 문자열에 추가
arr.forEach((item) => {
    result += obj[item];
})

// 5. 문자열을 비교
if(result === ascending) {
    console.log("ascending");
} else if (result === descending) {
    console.log("descending");
} else {
    console.log("mixed");
}

