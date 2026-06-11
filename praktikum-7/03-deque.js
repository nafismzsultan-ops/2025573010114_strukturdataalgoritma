class CircularQueue {
    constructor(capacity) {
        this.capacity = capacity;
        this.queue = new Array(capacity);

        this.front = 0;
        this.rear = -1;
        this.size = 0;
    }

    enqueue(value) {
        if (this.isFull()) {
            console.log("Queue penuh!");
            return;
        }

        this.rear = (this.rear + 1) % this.capacity;
        this.queue[this.rear] = value;
        this.size++;
    }

    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue kosong!");
            return null;
        }

        const value = this.queue[this.front];

        this.front = (this.front + 1) % this.capacity;
        this.size--;

        return value;
    }

    peek() {
        if (this.isEmpty()) return null;

        return this.queue[this.front];
    }

    isEmpty() {
        return this.size === 0;
    }

    isFull() {
        return this.size === this.capacity;
    }

    print() {
        if (this.isEmpty()) {
            console.log("Queue kosong");
            return;
        }

        let result = "FRONT → ";

        for (let i = 0; i < this.size; i++) {
            const index = (this.front + i) % this.capacity;

            result += this.queue[index];

            if (i < this.size - 1)
                result += " → ";
        }

        result += " ← REAR";

        console.log(result);
    }
}

const cq = new CircularQueue(5);

cq.enqueue(10);
cq.enqueue(20);
cq.enqueue(30);
cq.enqueue(40);

cq.print();

console.log("Dequeue:", cq.dequeue());

cq.print();

cq.enqueue(50);
cq.enqueue(60);

cq.print();

console.log("Front:", cq.peek());