function solution(array) {
    // 가장 많이 나온 숫자를 찾는 문제
    var answer = 0;
    let obj = {};
    let arr = [];
    
    array.forEach((item) => {
        obj[item] = array.filter((el) => {
            return el === item;
        }).length;
    })

    for(let i = 0; i < Object.keys(obj).length; i++) {
        arr.push(obj[Object.keys(obj)[i]]);
    }
    
    // 최빈값이 여러개인지 체크
    const multipleCheck = arr.filter((item) => {
        return item === Math.max(...arr);
    }).length;
    

    
    answer = multipleCheck > 1 ? -1 : Number(Object.keys(obj).find(key => obj[key] === Math.max(...arr)));
    
    return answer;
}