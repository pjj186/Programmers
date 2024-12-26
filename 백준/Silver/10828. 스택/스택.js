const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const stack = [];
const result = [];

const len = Number(input[0]);

for (let i = 1; i <= len; i++) {
    const [command, value] = input[i].split(' ');
    
    switch (command) {
        case 'push':
            stack.push(Number(value));
            break;
        case 'pop':
            result.push(stack.length ? stack.pop() : -1);
            break;
        case 'size':
            result.push(stack.length);
            break;
        case 'empty':
            result.push(stack.length ? 0 : 1);
            break;
        case 'top':
            result.push(stack.length ? stack[stack.length - 1] : -1);
            break;
    }
}

console.log(result.join('\n'));