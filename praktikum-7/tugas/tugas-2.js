// MIN STACK MENGGUNAKAN LINKED LIST

// Node
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Stack Biasa
class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    // O(1)
    push(data) {
        const node = new Node(data);
        node.next = this.top;
        this.top = node;
        this.size++;
    }

    // O(1)
    pop() {
        if (this.isEmpty()) {
            return null;
        }

        const value = this.top.data;
        this.top = this.top.next;
        this.size--;

        return value;
    }

    // O(1)
    peek() {
        return this.top ? this.top.data : null;
    }

    // O(1)
    isEmpty() {
        return this.size === 0;
    }

    // O(n)
    print() {
        let current = this.top;
        let result = "TOP → ";

        while (current) {
            result += `[${current.data}] `;
            current = current.next;
        }

        console.log(result);
    }
}


// MIN STACK

class MinStack {
    constructor() {

        // Stack utama
        this.dataStack = new Stack();

        // Stack minimum
        this.minStack = new Stack();
    }

    // Push data
    // Big O = O(1)
    push(value) {

        this.dataStack.push(value);

        if (
            this.minStack.isEmpty() ||
            value <= this.minStack.peek()
        ) {
            this.minStack.push(value);
        }
    }

    // Pop data
    // Big O = O(1)
    pop() {

        if (this.dataStack.isEmpty()) {
            return null;
        }

        const removed = this.dataStack.pop();

        if (removed === this.minStack.peek()) {
            this.minStack.pop();
        }

        return removed;
    }

    // Melihat elemen paling atas
    // Big O = O(1)
    peek() {
        return this.dataStack.peek();
    }

    // Mengambil nilai minimum saat ini
    // Big O = O(1)
    getMin() {

        if (this.minStack.isEmpty()) {
            return null;
        }

        return this.minStack.peek();
    }

    // Mengecek stack kosong
    // Big O = O(1)
    isEmpty() {
        return this.dataStack.isEmpty();
    }

    // Menampilkan isi stack
    // Big O = O(n)
    print() {
        this.dataStack.print();
    }
}


// PENGUJIAN

const ms = new MinStack();

console.log("=== PUSH DATA ===");

ms.push(15);
console.log("push(15)");
console.log("Min =", ms.getMin());

ms.push(8);
console.log("push(8)");
console.log("Min =", ms.getMin());

ms.push(20);
console.log("push(20)");
console.log("Min =", ms.getMin());

ms.push(4);
console.log("push(4)");
console.log("Min =", ms.getMin());

console.log("\nIsi Stack:");
ms.print();

console.log("\n=== POP DATA ===");

console.log("pop() =", ms.pop());
console.log("Min =", ms.getMin());

console.log("pop() =", ms.pop());
console.log("Min =", ms.getMin());

console.log("\nIsi Stack Sekarang:");
ms.print();