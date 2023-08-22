function solution(numbers) {
 var answer = numbers.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, 0) / numbers.length;
    
    console.log(answer);
    
    return answer;
}