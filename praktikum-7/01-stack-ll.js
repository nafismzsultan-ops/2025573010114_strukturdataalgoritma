class Node {
    constructor(d) {
        this.data = d;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    push(v) {
        const n = new Node(v);
        n.next = this.top;
        this.top = n;
        this.size++;
    }

    pop() {
        if (!this.top) return null;

        const v = this.top.data;
        this.top = this.top.next;
        this.size--;

        return v;
    }

    peek() {
        return this.top ? this.top.data : null;
    }

    isEmpty() {
        return this.size === 0;
    }

    print() {
        let cur = this.top;
        const out = [];

        while (cur) {
            out.push(cur.data);
            cur = cur.next;
        }

        console.log("TOP -> " + out.join(" -> "));
    }
}

// Testing
const s = new Stack();

s.push(10);
s.push(20);
s.push(30);

s.print();

console.log("Pop:", s.pop());

s.print();

console.log("Peek:", s.peek());

console.log("Empty:", s.isEmpty());