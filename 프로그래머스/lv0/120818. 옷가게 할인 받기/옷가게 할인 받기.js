function solution(price) {
    
    if(price >= 100000 && price < 300000) {
        return Math.floor(price - (price * (5/100)));
    } else if (price >= 300000 && price < 500000) {
        return Math.floor(price - (price * (10/100)));
    } else if (price >= 500000) {
        return Math.floor(price - (price * (20/100)));
    }

    return price;
}