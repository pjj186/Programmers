function solution(n, m, section) {
    let paint = 0;
    let count = 0;
    
    section.forEach((s) => {
        if(s > paint) {
            paint = s + m - 1; 
            count++;
        } 
    })
    
    
    return count;
}