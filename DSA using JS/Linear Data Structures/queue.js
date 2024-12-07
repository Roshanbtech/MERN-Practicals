class Queue {
    constructor() {
      this.items = [];
    }
  
    // Enqueue: add an element to the queue
    enqueue(element) {
      this.items.push(element);
    }
  
    // Dequeue: remove an element from the front of the queue
    dequeue() {
      if (this.isEmpty()) return undefined;
      return this.items.shift();
    }
  
    // Peek: get the first element of the queue without removing it
    peek() {
      if (this.isEmpty()) return undefined;
      return this.items[0];
    }
  
    // Check if the queue is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Get the size of the queue
    size() {
      return this.items.length;
    }
  
    // Clear the queue
    clear() {
      this.items = [];
    }
  }
  
  const queue = new Queue();
  
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  
  console.log(queue.peek()); // Output: 1
  console.log(queue.dequeue()); // Output: 1
  console.log(queue.peek()); // Output: 2