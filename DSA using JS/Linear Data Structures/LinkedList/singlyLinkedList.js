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

    removeDuplicates(){
        let current = this.head;
        while(current){
            let runner = current;
            while(runner.next){
                if(runner.next.data === current.data){
                    runner.next = runner.next.next;
                } else{
                    runner = runner.next;
                }
            }
            current = current.next;
        }
    }

    //remove the node which is having the last occurence of the data
    //input => Head -> 1 -> 2 -> 3 -> 4 -> 5 -> 2 -> 6 -> 2 -> 1

    removeLastOccur(data){
        let curr = this.head;
        let lastOccur = null;
        let prev = null;
        while(curr){
            if(curr.data === data){
                lastOccur = prev;
            }
            prev = curr;
            curr = curr.next;
        }
        if(lastOccur){
            lastOccur.next = lastOccur.next.next;
        }else if(this.head && this.head.data === data){
            this.head = this.head.next;
        }
    }

}

const list = new SinglyLinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.append(2);
list.append(6);
list.append(2);
list.append(1);
list.printList();

console.log('original display')
list.printList();
console.log('after removal of last occurance')
list.removeLastOccur(2)
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
list.append(25);
list.append(25);
list.append(28);
console.log(list.findMid());

list.removeOddNodes();
list.printList();
list.removeDuplicates();
list.printList();
