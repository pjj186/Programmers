const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n")
const result = Array(Number(input.shift())) // Number 크기의 배열 생성

input.forEach((item, idx) => {
    result[idx] = item[0]+item.at(-1)
})

console.log(result.join("\n"))