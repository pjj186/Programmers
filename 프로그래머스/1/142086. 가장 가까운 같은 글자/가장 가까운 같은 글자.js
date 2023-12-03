function solution(s) {
    let stack = [];
    let answer = [];
    
    for(let i = 0; i < s.length; i++) {
        if(!stack.includes(s[i])) {
            answer.push(-1);
            stack.push(s[i]);
        } else {
            answer.push(i - stack.lastIndexOf(s[i]));
            stack.push(s[i]);
        }
    }
    
    return answer;
}