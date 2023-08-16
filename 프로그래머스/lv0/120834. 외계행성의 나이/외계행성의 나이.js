function solution(age) {
    
    const dictionary = {
        "0" : "a",
        "1" : "b",
        "2" : "c",
        "3" : "d",
        "4" : "e",
        "5" : "f",
        "6" : "g",
        "7" : "h",
        "8" : "i",
        "9" : "j"
    }
    let answer = ""
    let ageArr = String(age).split("");
    
    for(let i = 0; i < ageArr.length; i++) {
        answer += dictionary[ageArr[i]];
    }
    
    return answer;
}