class Heap {
    constructor() {
        this.heap = [];
    }
    swap(i1, i2) {
        [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]];
    }
    peek() {
        return this.heap.length === 0 ? null : this.heap[0];
    }
    
    // Helper methods
    getLeftChildIndex(parentIndex) { return 2 * parentIndex + 1; }
    getRightChildIndex(parentIndex) { return 2 * parentIndex + 2; }
    getParentIndex(childIndex) { return Math.floor((childIndex - 1) / 2); }
    hasLeftChild(index) { return this.getLeftChildIndex(index) < this.heap.length; }
    hasRightChild(index) { return this.getRightChildIndex(index) < this.heap.length; }
    hasParent(index) { return this.getParentIndex(index) >= 0; }
    getLeftChild(index) { return this.heap[this.getLeftChildIndex(index)]; }
    getRightChild(index) { return this.heap[this.getRightChildIndex(index)]; }
    getParent(index) { return this.heap[this.getParentIndex(index)]; }

    // Add a value and maintain heap properties
    add(value) {
        this.heap.push(value);
        this.heapifyUp();
    }
    
    // Move the added value to its proper place
    heapifyUp() {
        let index = this.heap.length - 1;
        while (this.hasParent(index) && this.getParent(index) > this.heap[index]) {
            this.swap(this.getParentIndex(index), index);
            index = this.getParentIndex(index);
        }
    }

    // Remove the root (min element) and re-heapify
    remove() {
        if (this.heap.length === 0) return null;
        const item = this.heap[0];
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();
        this.heapifyDown();
        return item;
    }

    // Move the new root to its correct position
    heapifyDown() {
        let index = 0;
        while (this.hasLeftChild(index)) {
            let smallerChildIndex = this.getLeftChildIndex(index);
            if (this.hasRightChild(index) && this.getRightChild(index) < this.getLeftChild(index)) {
                smallerChildIndex = this.getRightChildIndex(index);
            }
            if (this.heap[index] <= this.heap[smallerChildIndex]) {
                break;
            } else {
                this.swap(index, smallerChildIndex);
            }
            index = smallerChildIndex;
        }
    }
}

// Heap Sort Function
function heapSort(arr) {
    const minHeap = new Heap();
    // Build the min-heap with all elements from the array
    for (let num of arr) {
        minHeap.add(num);
    }
    // Extract the min element repeatedly to sort the array
    for (let i = 0; i < arr.length; i++) {
        arr[i] = minHeap.remove();
    }
    return arr;
}

// Example usage
const arr = [50, 30, 40, 10, 20, 60];
console.log("Sorted array:", heapSort(arr));
