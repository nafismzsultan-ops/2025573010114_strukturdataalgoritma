class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    prepend(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
    }

    insertAt(index, data) {
        if (index < 0) return;

        if (index === 0) {
            this.prepend(data);
            return;
        }

        let current = this.head;
        let i = 0;

        while (current && i < index) {
            current = current.next;
            i++;
        }

        if (!current) {
            this.append(data);
            return;
        }

        const newNode = new Node(data);

        newNode.next = current;
        newNode.prev = current.prev;

        current.prev.next = newNode;
        current.prev = newNode;
    }

    delete(data) {
        let current = this.head;

        while (current) {

            if (current.data === data) {

                if (current === this.head) {
                    this.head = current.next;

                    if (this.head) {
                        this.head.prev = null;
                    }
                }

                else if (current === this.tail) {
                    this.tail = current.prev;
                    this.tail.next = null;
                }

                else {
                    current.prev.next = current.next;
                    current.next.prev = current.prev;
                }

                return;
            }

            current = current.next;
        }
    }

    reverse() {
        let current = this.head;
        let temp = null;

        while (current) {
            temp = current.prev;
            current.prev = current.next;
            current.next = temp;

            current = current.prev;
        }

        temp = this.head;
        this.head = this.tail;
        this.tail = temp;
    }

    printForward() {
        let current = this.head;
        let result = "";

        while (current) {
            result += `[${current.data}]`;

            if (current.next) {
                result += " ⇄ ";
            }

            current = current.next;
        }

        console.log("Depan :", result);
    }

    printBackward() {
        let current = this.tail;
        let result = "";

        while (current) {
            result += `[${current.data}]`;

            if (current.prev) {
                result += " ⇄ ";
            }

            current = current.prev;
        }

        console.log("Belakang :", result);
    }
}

const dll = new DoublyLinkedList();

console.log("Append:");
dll.append(10);
dll.append(20);
dll.append(30);
dll.printForward();

console.log("\nPrepend:");
dll.prepend(5);
dll.printForward();

console.log("\nInsert At index 2:");
dll.insertAt(2, 15);
dll.printForward();

console.log("\nPrint Backward:");
dll.printBackward();

console.log("\nDelete 20:");
dll.delete(20);
dll.printForward();

console.log("\nReverse:");
dll.reverse();
dll.printForward();

console.log("\nPrint Backward setelah reverse:");
dll.printBackward();