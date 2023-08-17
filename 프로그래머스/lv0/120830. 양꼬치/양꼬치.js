function solution(n, k) {
    let s = Math.floor(n / 10); // 서비스 음료 개수
    var answer = n * 12000 + k * 2000 - s * 2000;
    return answer;
}