function solution(s, skip, index) {
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
                      "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", 
                      "u", "v", "w", "x", "y", "z"].filter((w) => !skip.includes(w));
    
    console.log(alphabet.length);
    
    var answer = s.split("").map((v) => alphabet[(alphabet.indexOf(v) + index) % alphabet.length]
    ).join("");

    return answer;
}