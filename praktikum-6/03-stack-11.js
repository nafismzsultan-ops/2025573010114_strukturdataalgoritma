class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    prepend(data) {
        const newNode = new Node(data);

        newNode.next = this.head;
        this.head = newNode;

        this.length++;
    }

    removeHead() {
        if (!this.head) return null;

        const removed = this.head.data;
        this.head = this.head.next;

        this.length--;

        return removed;
    }

    peekHead() {
        if (!this.head) return null;

        return this.head.data;
    }

    isEmpty() {
        return this.length === 0;
    }

    size() {
        return this.length;
    }

    print() {
        let current = this.head;
        let result = "";

        while (current) {
            result += `[${current.data}]`;

            if (current.next) {
                result += " -> ";
            }

            current = current.next;
        }

        console.log(result || "Stack kosong");
    }
}

class Stack {
    constructor() {
        this.list = new LinkedList();
    }

    push(data) {
        this.list.prepend(data);
    }

    pop() {
        return this.list.removeHead();
    }

    peek() {
        return this.list.peekHead();
    }

    isEmpty() {
        return this.list.isEmpty();
    }

    size() {
        return this.list.size();
    }

    print() {
        this.list.print();
    }
}

const stack = new Stack();

stack.push("Login");
stack.push("Edit Profil");
stack.push("Upload Foto");

console.log("Push data:");
stack.print();

console.log("\nPeek:");
console.log(stack.peek());

console.log("\nPop:");
console.log(stack.pop());

console.log("\nSetelah pop:");
stack.print();

console.log("\nSize:");
console.log(stack.size());

console.log("\nIs Empty:");
console.log(stack.isEmpty());

console.log("\n=== Simulasi Undo ===");

const undoStack = new Stack();

const aksi = [
    "Ketik A",
    "Ketik B",
    "Hapus B",
    "Tambah Gambar"
];

for (let i = 0; i < aksi.length; i++) {
    console.log("Aksi:", aksi[i]);
    undoStack.push(aksi[i]);
}

console.log("\nUndo:");
console.log("Undo ->", undoStack.pop());
console.log("Undo ->", undoStack.pop());

console.log("\nSisa Stack:");
undoStack.print();