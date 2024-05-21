const fs = require('fs');
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const grade = input[0];

const gradeObj = {
    "A+" : 4.3,
    "A0" : 4.0,
    "A-" : 3.7,
    "B+" : 3.3,
    "B0" : 3.0,
    "B-" : 2.7,
    "C+" : 2.3,
    "C0" : 2.0,
    "C-" : 1.7,
    "D+" : 1.3,
    "D0" : 1.0,
    "D-" : 0.7,
    "F" : 0.0
}

console.log(gradeObj[grade].toFixed(1));