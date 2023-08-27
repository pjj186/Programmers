function solution(name, yearning, photo) {
    var answer = [];
    
    let obj = {};
    
    name.forEach((el, index) => {
        obj[el] = yearning[index];
    })

    
    photo.forEach((item) => {
        let sum = 0;
        item.forEach((el) => {
            if (obj[el]) {
                sum += obj[el];
            }
        });
        answer.push(sum);
    })
    
    
    return answer;
}