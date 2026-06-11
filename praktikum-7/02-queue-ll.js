class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    enqueue(data) { // tambah dari BELAKANG — O(1)
        const node = new Node(data);

        if (!this.tail) {
            this.head = this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }

        this.size++;
    }

    dequeue() { // hapus dari DEPAN — O(1)
        if (this.isEmpty()) return null;

        const val = this.head.data;
        this.head = this.head.next;

        if (!this.head)
            this.tail = null;

        this.size--;

        return val;
    }

    front() {
        return this.head ? this.head.data : null;
    }

    isEmpty() {
        return this.size === 0;
    }

    print() {
        let s = 'FRONT → ';
        let cur = this.head;

        while (cur) {
            s += cur.data;

            if (cur.next)
                s += ' → ';

            cur = cur.next;
        }

        s += ' ← REAR';

        console.log(s);
    }
}

// Testing
const q = new Queue();

q.enqueue('Pelanggan-A');
q.enqueue('Pelanggan-B');
q.enqueue('Pelanggan-C');

q.print();

console.log('Dilayani:', q.dequeue());

q.enqueue('Pelanggan-D');

q.print();