const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();
const n = Number(input);

class Queue {
    constructor() {
        this.items = {};
        this.head = 0;
        this.tail = 0;
    }
    
    enqueue(item) {
        this.items[this.tail] = item;
        this.tail++;
    }
    
    dequeue() {
        const item = this.items[this.head];
        delete this.items[this.head];
        this.head++;
        return item;
    }
    
    getSize() {
        return this.tail - this.head;
    }
}

const queue = new Queue();

// 1부터 N까지의 숫자를 큐에 넣기
for(let i = 1; i <= n; i++) {
    queue.enqueue(i);
}

// 카드가 한 장 남을 때까지 반복
while(queue.getSize() > 1) {
    // 제일 위의 카드를 버림
    queue.dequeue();
    
    // 그 다음 제일 위의 카드를 제일 아래로 이동
    if(queue.getSize() > 0) {
        queue.enqueue(queue.dequeue());
    }
}

console.log(queue.dequeue());