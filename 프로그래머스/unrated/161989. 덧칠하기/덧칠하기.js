function solution(n, m, section) {
    
    let paint = 0; // 현재까지 칠한 위치
    
    let count = 0; // 칠한 횟수
    
    section.forEach((s) => {
        // 칠해야 할 위치가 현재 칠한 위치보다 크면
        if(s > paint) {
            paint = s + m - 1; // -1을 해주는 이유는 현재 칠한 범위의 마지막 위치가 다음 작업의 시작 위치가 되게끔 하려고
            count++;
        } 
    })
    
    
    return count;
}