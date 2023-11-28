function solution(keymap, targets) {
    const answer = [];
    const map = new Map(); // 문자별로 최소횟수를 기록한 MAP
    
    for (const key of keymap) {
        for(let i = 0; i < key.length; i++) {
            // !map.has(key[i]) :  map 객체에 key가 없거나
            // i + 1 < map.get(key[i]) : 문자를 누른 횟수가 기존에 저장되어 있는 문자의 누른 횟수보다 작다면
            if(!map.has(key[i]) || i + 1 < map.get(key[i])) map.set(key[i], i + 1);
        }
    }
    
    for (const target of targets) {
        let count = 0; // 최소 횟수
        for(let i = 0; i < target.length; i++) {
            count += map.get(target[i]); // count에 해당 target에 해당하는 알파벳을 입력하기위해 누른 key의 횟수를 더해준다. ! 이때 map.get(target[i]) 을 실행할 때 map에서 해당 값을 찾지 못한다면 undefined를 연산하는것이 되고 그 결과는 NaN이다.
        }
        
        // NaN은 Falsy값이므로 -1
        answer.push(count || -1);
    }
    
    return answer;
}