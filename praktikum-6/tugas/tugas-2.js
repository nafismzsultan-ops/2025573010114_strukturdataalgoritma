class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function buatList(arr) {
    if (arr.length === 0) return null;

    let head = new Node(arr[0]);
    let current = head;

    for (let i = 1; i < arr.length; i++) {
        current.next = new Node(arr[i]);
        current = current.next;
    }

    return head;
}

function printList(head) {
    let current = head;
    let result = "";

    while (current) {
        result += `[${current.data}]`;

        if (current.next) {
            result += " -> ";
        }

        current = current.next;
    }

    console.log(result);
}

function palindromeLL(head) {
    let arr = [];
    let current = head;

    while (current) {
        arr.push(current.data);
        current = current.next;
    }

    let kiri = 0;
    let kanan = arr.length - 1;

    while (kiri < kanan) {
        if (arr[kiri] !== arr[kanan]) {
            return false;
        }

        kiri++;
        kanan--;
    }

    return true;
}

function hapusNDariAkhir(head, n) {
    let dummy = new Node(0);
    dummy.next = head;

    let fast = dummy;
    let slow = dummy;

    for (let i = 0; i <= n; i++) {
        fast = fast.next;
    }

    while (fast) {
        fast = fast.next;
        slow = slow.next;
    }

    slow.next = slow.next.next;

    return dummy.next;
}

function tengahLinkedList(head) {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

console.log("==== TEST PALINDROME ====");

let A = buatList([1, 2, 3, 2, 1]);
printList(A);
console.log("Palindrome:", palindromeLL(A));

let B = buatList([1, 2, 2, 1]);
printList(B);
console.log("Palindrome:", palindromeLL(B));

let C = buatList([1, 2, 3, 4]);
printList(C);
console.log("Palindrome:", palindromeLL(C));

console.log("\n==== TEST HAPUS N DARI AKHIR ====");

let D = buatList([1, 2, 3, 4, 5]);

console.log("Sebelum:");
printList(D);

D = hapusNDariAkhir(D, 2);

console.log("Sesudah hapus n=2:");
printList(D);

let E = buatList([10, 20, 30, 40]);

console.log("\nSebelum:");
printList(E);

E = hapusNDariAkhir(E, 1);

console.log("Sesudah hapus n=1:");
printList(E);

let F = buatList([7, 8, 9]);

console.log("\nSebelum:");
printList(F);

F = hapusNDariAkhir(F, 3);

console.log("Sesudah hapus n=3:");
printList(F);

console.log("\n==== TEST NODE TENGAH ====");

let G = buatList([1, 2, 3, 4, 5]);

printList(G);

console.log("Tengah:", tengahLinkedList(G).data);

let H = buatList([10, 20, 30, 40, 50, 60]);

printList(H);

console.log("Tengah:", tengahLinkedList(H).data);

let I = buatList([100, 200]);

printList(I);

console.log("Tengah:", tengahLinkedList(I).data);