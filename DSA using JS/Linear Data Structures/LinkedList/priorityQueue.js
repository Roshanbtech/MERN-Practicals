class Node {
    constructor(data, priority) {
        this.data = data;
        this.priority = priority;
        this.next = null;
    }
}

class PriorityQueue {
    constructor() {
        this.head = null; // Head of the linked list
        this.size = 0;    // Number of elements in the queue
    }

    // Add an element based on priority
    enqueue(data, priority) {
        const newNode = new Node(data, priority);

        // If the queue is empty or the new node has the highest priority is considered as lowest
        if (!this.head || priority < this.head.priority) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            // Traverse to find the correct position for the new node
            let current = this.head;
            while (current.next && current.next.priority <= priority) {
                current = current.next;
            }
            newNode.next = current.next;
            current.next = newNode;
        }

        this.size++;
    }

    // Remove and return the element with the highest priority
    dequeue() {
        if (!this.head) return null;
        const data = this.head.data;
        this.head = this.head.next;
        this.size--;
        return data;
    }

    // Get the element with the highest priority
    peek() {
        if (!this.head) return null;
        return this.head.data;
    }

    // Check if the priority queue is empty
    isEmpty() {
        return this.size === 0;
    }

    // Get the size of the priority queue
    getSize() {
        return this.size;
    }

    // Clear the priority queue
    clear() {
        this.head = null;
        this.size = 0;
    }
}

// Test the priority queue
const queue = new PriorityQueue();

queue.enqueue(1, 3);
queue.enqueue(2, 1);
queue.enqueue(3, 2);

console.log(queue.peek()); // Output: 2 (highest priority)
console.log(queue.dequeue()); // Output: 2
console.log(queue.peek()); // Output: 3
console.log(queue.isEmpty()); // Output: false
console.log(queue.getSize()); // Output: 2

queue.clear();
console.log(queue.isEmpty()); // Output: true
