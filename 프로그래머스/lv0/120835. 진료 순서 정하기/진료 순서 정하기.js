function solution(emergency) {
    const obj1 = {};
    const original = [...emergency];
    
    emergency.sort((a,b) => b - a);
    
    for(let i = 0; i < emergency.length; i++) {
        obj1[emergency[i]] = i + 1; 
    }
    
    return original.map((item) => {
        return obj1[item];
    });
}