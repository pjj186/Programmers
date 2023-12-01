function solution(t, p) {
    var answer = 0;
    
    console.log(t.length);
    console.log(p.length);
    
    for(let i = 0; i <= t.length - p.length; i++) {
        let num = t.substr(i, p.length);
        
        if(Number(num) <= Number(p)) {
            answer++;
        }
    }
    
    
    
    return answer;
}