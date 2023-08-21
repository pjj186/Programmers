function solution(money) {
    let americano = Math.floor(money / 5500);
    let extraMoney = money % 5500;
    
    var answer = [americano, extraMoney];
    return answer;
}