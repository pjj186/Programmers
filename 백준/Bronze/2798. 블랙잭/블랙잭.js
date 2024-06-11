const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(" ").map(Number);
const cards = input[1].split(" ").map(Number);

let closestSum = 0; // 현재 최고 합계

for(let i = 0; i < cards.length - 2; i++) {
    // 카드가 서로 겹치는 수를 줄이기 위해 cards.length - 2
    for(let j = i + 1; j < cards.length - 1; j++) {
        // 카드가 서로 겹치는 수를 줄이기 위해 j = i + 1, cards.length - 1
        for(let k = j + 1; k < cards.length; k++) {
            // 카드가 서로 겹치는 수를 줄이기 위해 k = j + 1, cards.length
            if(cards[i] !== cards[j] && cards[i] !== cards[k] && cards[j] !== cards[k]) {
                // 카드가 서로 겹치는 부분을 제외하고 합을 구한다.
                const currentCardsSetSum = cards[i] + cards[j] + cards[k];
                if(currentCardsSetSum <= M && currentCardsSetSum > closestSum) {
                    // 합계가 최댓값보다 작고, 현재 최고 합계보다 크면, 새롭게 최고 합계에 할당
                    closestSum = currentCardsSetSum;
                }
            }
        }
    }
}

console.log(closestSum);