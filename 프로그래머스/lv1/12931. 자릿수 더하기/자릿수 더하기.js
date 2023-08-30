function solution(n) {
    
    var answer = [...String(n)].map((item) => {
        return Number(item);
    }).reduce((acc, cur) => {
        return acc + cur;
    })

    
    return answer;
}