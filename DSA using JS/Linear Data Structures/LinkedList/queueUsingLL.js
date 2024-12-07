class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedListQueue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // Add an element to the queue
    enqueue(data) {
        const newNode = new Node(data);
        if (this.tail) {
            this.tail.next = newNode;
        }
        this.tail = newNode;
        if (!this.head) {
            this.head = newNode;
        }
        this.size++;
    }

    // Remove an element from the front of the queue
    dequeue() {
        if (!this.head) return null;
        const node = this.head;
        this.head = this.head.next;
        if (!this.head) {
            this.tail = null; // If the queue is empty, reset the tail as well
        }
        this.size--;
        return node.data;
    }

    // Check if the queue is empty
    isEmpty() {
        return this.size === 0;
    }

    // Get the front element of the queue
    peek() {
        if (!this.head) return null;
        return this.head.data;
    }

    // Clear the queue
    clear() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
}

// Test the queue
const queue = new LinkedListQueue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.peek()); // Output: 1
console.log(queue.dequeue()); // Output: 1
console.log(queue.peek()); // Output: 2
console.log(queue.isEmpty()); // Output: false
console.log(queue.size); // Output: 2

queue.clear();
console.log(queue.isEmpty()); // Output: true
console.log(queue.size); // Output: 0
