function solution(wallpaper) {
    
    let X = []
    let Y = []
    
    for(let i = 0; i < wallpaper.length; i++) {
        for(let j = 0; j < wallpaper[0].length; j++) {
            if(wallpaper[i][j] === "#") {
                X.push(i);
                Y.push(j);
            }
        }
    }
    var answer = [Math.min(...X),Math.min(...Y),Math.max(...X) + 1,Math.max(...Y) + 1 ];

    return answer;
}