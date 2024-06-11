const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const answer = [];

for(let i = 0; i < input.length - 1; i++) {
    let str = input[i];
    const stack = [];
    let balanced = true;

    for(let j = 0; j < str.length; j++) {
        let char = str[j];

        if(char === "(" || char === "[") {
            stack.push(char);
        } else if (char === ")") {
            if(stack.length === 0 || stack[stack.length - 1] !== "(") {
                balanced = false;
                break;
            } else {
                stack.pop();
            }
        } else if (char === "]") {
            if(stack.length === 0 || stack[stack.length - 1] !== "[") {
                balanced = false;
                break;
            } else {
                stack.pop();
            }
        }
    }

    if(balanced && stack.length === 0) {
        answer.push("yes");
    } else {
        answer.push("no");
    }
}

console.log(answer.join("\n"));
