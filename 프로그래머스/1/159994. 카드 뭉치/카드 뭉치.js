function solution(cards1, cards2, goal) {
    var answer = "Yes";

    const cards1Goal = [];
    const cards2Goal = [];

    
    for(let i = 0; i < goal.length; i++) {
        if(cards1.indexOf(goal[i]) !== -1) {
            cards1Goal.push(goal[i]);
        } else {
            cards2Goal.push(goal[i]);
        }
    }
    
    if(cards1Goal.length !== 0) {
        for(let j = 0; j < cards1Goal.length; j++) {
            if(cards1[j] !== cards1Goal[j]) answer = "No"
        }
    }
    
    if(cards2Goal.length !== 0) {
        for(let k = 0; k < cards2Goal.length; k++) {
            if(cards2[k] !== cards2Goal[k]) answer = "No"
        }
    }

    
    return answer;
}