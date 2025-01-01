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

    display() {
        let curr = this.head;
        let list = '';
        while (curr) {
            list += curr.data + '->';
            curr = curr.next;
        }
        console.log(list, 'null');
    }

    pop() {
        if (this.head === null) return null;
        let data = this.head.data;
        this.head = this.head.next;
        this.size--;
        return data;
    }

    findMid() {
        let fast = this.head;
        let slow = this.head;
        while (fast && fast.next) {
            fast = fast.next.next;
            slow = slow.next;
        }
        console.log(slow.data);
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

const st = new Stack();
st.push(1);
st.push(9);
st.push(3);
st.push(0);
st.push(2);
st.display();  // Output: 2->0->3->9->1->null
st.pop();
st.display();  // Output: 0->3->9->1->null
st.findMid();  // Output: 3
st.peek();  // Output: 0
st.isEmpty();  // Output: false
st.getSize();  // Output: 3
