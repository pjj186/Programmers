function solution(num_list) {
    var answer = [];
    let even = 0;
    let odd = 0;
    
    num_list.forEach((item) => {
        item % 2 === 0 ? even++ : odd++;
    })
    
    answer = [even, odd]
    
    return answer;
}