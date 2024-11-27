class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BST{
    constructor(){
        this.root = null;
    }
    // Check if the tree is empty
    isEmpty(){
        return this.root === null;
    }
    // Insert a node into the tree
    insert(data){
        const newNode = new Node(data);
        if(this.isEmpty()){
            this.root = newNode;
        }else{
            this.insertNode(this.root,newNode);
        }
    }
    // Helper function to insert node recursively
    insertNode(root,newNode){
        if(newNode.data < root.data){
            if(root.left === null){
                root.left = newNode;
            }else{
                this.insertNode(root.left,newNode);
            }
        }else{
            if(root.right === null){
                root.right = newNode;
            }else{
                this.insertNode(root.right,newNode);
            }
        }
    }

    // Search for a node
    search(data){
        if(this.isEmpty()){
            return false;
        }else{
            return this.searchNode(this.root,data);
        }
    }

    // Helper function for search
    searchNode(root,data){
        if(root.data === data){
            return true;
        } else if(data < root.data && root.left !== null){
            return this.searchNode(root.left,data);
        } else if(data > root.data && root.right !== null){
            return this.searchNode(root.right,data);
        } else{
            return false;
        }
    }

    // DFS traversal - Inorder (left, root, right)
    inOrder(root = this.root){
        if(root){
            this.inOrder(root.left);
            console.log(root.data);
            this.inOrder(root.right);
        }
    }

    // DFS traversal - Preorder (root, left, right)
    preOrder(root = this.root){
        if(root){
            console.log(root.data);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }

    // DFS traversal - Postorder (left, right, root)
    postOrder(root = this.root){
        if(root){
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.data);
        }
    }

    // BFS traversal - Level Order
    levelOrder(){
        if(!this.root) return;
        const queue = [];
        queue.push(this.root);
        while(queue.length){
            let curr = queue.shift();
            console.log(curr.data);
            if(curr.left) queue.push(curr.left);
            if(curr.right) queue.push(curr.right);
        }
    }

    nodeDegree(node) {
        let degree = 0;
        if (node.left) degree++;
        if (node.right) degree++;
        return degree;
    }

    // Get the height of the tree
     height(root = this.root){
        if(!root) return -1;
        const leftHeight = this.height(root.left);
        const rightHeight = this.height(root.right);
        return Math.max(leftHeight,rightHeight) + 1;
     }

     // Get the number of nodes in the tree
     size(root = this.root){
        if(!root) return 0;
        const leftSize = this.size(root.left);
        const rightSize = this.size(root.right);
        return leftSize + rightSize + 1;
     }

     // degree of the tree
     degree(root = this.root) {
        if (!root) return 0;

        // Calculate degree of current node
        const currentDegree = this.nodeDegree(root);

        // Recursively calculate the degree of the left and right subtrees
        const leftDegree = this.degree(root.left);
        const rightDegree = this.degree(root.right);

        // The degree of the tree is the maximum degree encountered at any node
        return Math.max(currentDegree, leftDegree, rightDegree);
    }

    // max and min of tree
     max(root = this.root){
        while(root.right!==null){
            root = root.right;
        }
        return root.data;
     }

     min(root = this.root){
        while(root.left!==null){
            root = root.left;
        }
        return root.data;
     }

     // Delete a node from the tree
     delete(data){
        this.root = this.deleteNode(this.root,data);
     }
     deleteNode(root,data){
        if(root === null) return root;
        if(data < root.data){
            root.left = this.deleteNode(root.left,data);
        }else if(data > root.data){
            root.right = this.deleteNode(root.right,data);
        }else{
            if(!root.left){
                return root.right;
            }else if(!root.right){
                return root.left;
            }
            // If the node to be deleted has two children 
            root.data = this.min(root.right);
            root.right = this.deleteNode(root.right,root.data);
        }
        return root;
        }

    
    }


// Test the implementation
const bst = new BST();
bst.insert(10);
bst.insert(20);
bst.insert(30);
bst.insert(40);
bst.insert(50); 
bst.insert(60);
bst.insert(25);
bst.insert(15);

// Test search
console.log('Search 30:', bst.search(30)); // Should return true

// Test traversals
console.log('InOrder Traversal:');
bst.inOrder(); // Expected: 10, 20, 30, 40, 50

console.log('PreOrder Traversal:');
bst.preOrder(); // Expected: 10, 20, 30, 40, 50

console.log('PostOrder Traversal:');
bst.postOrder(); // Expected: 50, 40, 30, 20, 10

console.log('LevelOrder Traversal:');
bst.levelOrder(); // Expected: 10, 20, 30, 40, 50

console.log('Height of the tree:', bst.height()); // Expected: 3

console.log('Size of the tree:', bst.size()); // Expected: 5

console.log('Degree of the node:', bst.degree()); // Expected: 2

console.log('Max of the tree:', bst.max()); // Expected: 60

console.log('Min of the tree:', bst.min()); // Expected: 10

// Test delete
bst.delete(30);
console.log('After deleting 30:');
bst.inOrder(); 
bst.delete(10);
console.log('After deleting 10:');
bst.inOrder(); 

bst.delete(50);
console.log('After deleting 50:');
bst.inOrder(); 

console.log('Count of leaf nodes:', bst.countLeafNodes());




// class Node {
//     constructor(data) {
//         this.data = data;
//         this.left = null;
//         this.right = null;
//     }
// }

// class BST {
//     constructor() {
//         this.root = null;
//     }

//     isEmpty() {
//         return this.root === null;
//     }

//     insert(data) {
//         const newNode = new Node(data);
//         if (this.isEmpty()) {
//             this.root = newNode;
//         } else {
//             this.insertNode(this.root, newNode);
//         }
//     }

//     insertNode(root, newNode) {
//         if (newNode.data < root.data) {
//             if (root.left === null) {
//                 root.left = newNode;
//             } else {
//                 this.insertNode(root.left, newNode);
//             }
//         } else {
//             if (root.right === null) {
//                 root.right = newNode;
//             } else {
//                 this.insertNode(root.right, newNode);
//             }
//         }
//     }

//     search(data) {
//         if (this.isEmpty()) {
//             return false;
//         } else {
//             return this.searchNode(this.root, data);
//         }
//     }

//     searchNode(root, data) {
//         if (root.data === data) return true;
//         else if (data < root.data && root.left !== null) {
//             return this.searchNode(root.left, data);
//         } else if (data > root.data && root.right !== null) {
//             return this.searchNode(root.right, data);
//         } else {
//             return false;
//         }
//     }

//     inOrder(root = this.root) {
//         if (root) {
//             this.inOrder(root.left);
//             console.log(root.data);
//             this.inOrder(root.right);
//         }
//     }

//     preOrder(root = this.root) {
//         if (root) {
//             console.log(root.data);
//             this.preOrder(root.left);
//             this.preOrder(root.right);
//         }
//     }

//     postOrder(root = this.root) {
//         if (root) {
//             this.postOrder(root.left);
//             this.postOrder(root.right);
//             console.log(root.data);
//         }
//     }

//     levelOrder() {
//         if (!this.root) return;
//         const queue = [];
//         queue.push(this.root);
//         while (queue.length) {
//             let curr = queue.shift();
//             console.log(curr.data);
//             if (curr.left) queue.push(curr.left);
//             if (curr.right) queue.push(curr.right);
//         }
//     }

//     max(root = this.root) {
//         while (root.right) {
//             root = root.right;
//         }
//         return root.data;
//     }

//     min(root = this.root) {
//         while (root.left) {
//             root = root.left;
//         }
//         return root.data;
//     }

//     size(root = this.root) {
//         if (!root) return 0;
//         const leftSize = this.size(root.left);
//         const rightSize = this.size(root.right);
//         return leftSize + rightSize + 1;
//     }

//     height(root = this.root) {
//         if (!root) return -1; // base case: height of an empty tree is -1
//         const leftHeight = this.height(root.left);
//         const rightHeight = this.height(root.right);
//         return Math.max(leftHeight, rightHeight) + 1;
//     }

//     getDegree(node) {
//         let degree = 0;
//         if (node.left) degree += 1;
//         if (node.right) degree += 1;
//         return degree;
//     }

//     // Deletion
//     delete(data) {
//         this.root = this.deleteNode(this.root, data);
//     }

//     deleteNode(root, data) {
//         if (root === null) return null;

//         if (data < root.data) {
//             root.left = this.deleteNode(root.left, data);
//         } else if (data > root.data) {
//             root.right = this.deleteNode(root.right, data);
//         } else {
//             // Node to be deleted found
//             if (!root.left && !root.right) {
//                 return null; // Case 1: Leaf node
//             } else if (!root.left) {
//                 return root.right; // Case 2: One child (right)
//             } else if (!root.right) {
//                 return root.left; // Case 2: One child (left)
//             } else {
//                 // Case 3: Two children
//                 // Find the minimum in the right subtree
//                 let minRight = this.min(root.right);
//                 root.data = minRight;
//                 root.right = this.deleteNode(root.right, minRight);
//             }
//         }
//         return root;
//     }
// }

// // Example usage:
// const tree = new BST();
// tree.insert(10);
// tree.insert(20);
// tree.insert(5);
// tree.insert(6);
// tree.insert(15);
// tree.insert(30);

// console.log("InOrder:");
// tree.inOrder();

// console.log("PreOrder:");
// tree.preOrder();

// console.log("PostOrder:");
// tree.postOrder();

// console.log("LevelOrder:");
// tree.levelOrder();

// console.log("Tree Size:", tree.size());
// console.log("Tree Height:", tree.height());
// console.log("Maximum value:", tree.max());
// console.log("Minimum value:", tree.min());

// console.log("Deleting 20...");
// tree.delete(20);
// console.log("InOrder after deletion:");
// tree.inOrder();
