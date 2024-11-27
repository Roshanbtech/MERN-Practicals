// create a singly linked list
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

// singly linked list class
class SinglyLinkedList{
    constructor(){
        this.head = null;
    }
    isEmpty(){
        return this.head === null;
    }

    append(data){
        const newNode = new Node(data);
        if(this.head === null){
            this.head = newNode;
        } else{
           let current = this.head;
           while(current.next !== null){
            current = current.next;
           }
           current.next = newNode;
        }
    }

    prepend(data){
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    printList(){
        let current = this.head;
        let list = '';
        while(current){
            list += current.data + '->';
            current = current.next;
        }
        console.log(list + 'null');
    }

    deleteWithValue(data){
        if(this.head === null) return 'List is empty';
        if(this.head.data === data){
            this.head = this.head.next;
            return 'head node deleted';
        }
        let current = this.head;
        while(current.next){
            if(current.next.data === data){
                current.next = current.next.next;
                return `${data} deleted`;   
            }
            current = current.next;
        }
        return 'data not found';
    }

    deleteAtPosition(pos){
        if(this.head === null) return 'List is empty';
        if(pos === 0){
            this.head = this.head.next;
            return 'head node deleted';
        }
        let current = this.head;
        let count = 0;
        while(current){
            if(count === pos - 1){
                current.next = current.next.next;
                return 'deleted';
            }
            count++;
            current = current.next;
        }
        return 'position out of range';
    }

    reverse(){
        let current = this.head;
        let prev = null;
        let next = null;
        while(current){
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
    }
    this.head = prev;
    }
 
    deleteMiddle(){
        if (this.head === null) return 'empty';
        if (this.head.next === null) {  // Only one node in the list
            this.head = null;
            return 'only node deleted';
        }    
        let slow = this.head;
        let fast = this.head;
        let prev = null;    
        while(fast && fast.next){
            prev = slow;
            slow = slow.next;
            fast = fast.next.next;
        }
        if(prev !== null){
            prev.next = slow.next;
            return 'deleted';
        } else{
            return 'data not found';
        }
    }
    findMid(){
        let fast = this.head;
        let slow = this.head;
        while(fast && fast.next){
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow.data;
    }

    //remove all odd nodes from the list
    removeOddNodes(){
        while(this.head && this.head.data%2!==0){
            this.head = this.head.next;
        }
        let current = this.head;;
        let prev = null;
        while(current){
            if(current.data%2!==0){
                prev.next = current.next;
            } else{
                prev = current;
            }
            current = current.next;
        }
    }
}

const list = new SinglyLinkedList();
list.append(10);
list.append(20);
list.append(30);
list.prepend(5);
list.prepend(15);
list.prepend(25);
list.printList();

console.log(list.deleteWithValue(20));
list.printList();

console.log(list.deleteAtPosition(1));
list.printList();

list.reverse();
list.printList();

console.log(list.deleteMiddle());
list.printList();

list.append(23);
list.append(24);
list.append(25);

console.log(list.findMid());

list.removeOddNodes();
list.printList();
