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

    // Enqueue (Add to the end of the queue)
    enqueue(data) {
        const newNode = new Node(data);
        if (this.tail === null) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    // Dequeue (Remove from the front of the queue)
    dequeue() {
        if (this.head === null) return null;
        const data = this.head.data;
        this.head = this.head.next;
        if (this.head === null) {
            this.tail = null;
        }
        this.size--;
        return data;
    }

    // Display the queue
    display() {
        let curr = this.head;
        let list = '';
        while (curr) {
            list += curr.data + '->';
            curr = curr.next;
        }
        console.log(list, 'null');
    }

    // Find the middle element of the queue
    findMid() {
        let fast = this.head;
        let slow = this.head;
        while (fast && fast.next) {
            fast = fast.next.next;
            slow = slow.next;
        }
        console.log(slow.data);
    }

    // Peek (Get the front element without removing it)
    peek() {
        if (this.head === null) return null;
        return this.head.data;
    }

    // Check if the queue is empty
    isEmpty() {
        return this.head === null;
    }

    // Get the size of the queue
    getSize() {
        return this.size;
    }
}

// Example usage:
const q = new Queue();
q.enqueue(1);
q.enqueue(9);
q.enqueue(3);
q.enqueue(0);
q.enqueue(2);
q.display();  // Output: 1->9->3->0->2->null
console.log(q.dequeue());  // Output: 1
q.display();  // Output: 9->3->0->2->null
q.findMid();  // Output: 3
console.log(q.peek());  // Output: 9
console.log(q.isEmpty());  // Output: false
console.log(q.getSize());  // Output: 4
