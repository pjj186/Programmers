function solution(today, terms, privacies) {
    var answer = [];
    let termsObj = {};
    
    const expire = new Date(today);
    
    terms.forEach((item) => {
        const [type, term] = item.split(" ");
        termsObj[type] = Number(term);
    });
    
    privacies.forEach((item, index) => {
        
    const [date, type] = item.split(" ");

    const privacyDate = new Date(date);

    privacyDate.setMonth(privacyDate.getMonth() + termsObj[type]);

    if (privacyDate <= expire) answer.push(index + 1);
  });

    
    return answer;
}