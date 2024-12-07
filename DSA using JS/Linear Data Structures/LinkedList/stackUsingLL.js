// Stack using Linked List

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    push(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }
    pop() {
        if (this.head === null) return null;
        const data = this.head.data;
        this.head = this.head.next;
        this.size--;
        return data;
    }
    peek() {
        if (this.head === null) return null;
        return this.head.data;
    }
    isEmpty() {
        return this.head === null;
    }
    getSize() {
        return this.size;
    }
}

// Test the stack
const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.isEmpty());
console.log(stack.getSize());

