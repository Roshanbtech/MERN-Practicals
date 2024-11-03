function heapSort(arr){
       const n = arr.length;
       //build a max heap
       for(let i = Math.floor(n/2)-1; i>=0; i--){
           heapify(arr, n, i);
       }
       //extract elements one by one
       for(let i = n-1; i>=0; i--){
        //move current root to end
        [arr[0], arr[i]] = [arr[i], arr[0]]; //swap
        //call max heapify on the reduced heap
        heapify(arr, i, 0);
       }
       return arr;
}

function heapify(arr, n, i){
    let largest = i;
    let left = 2*i+1;
    let right = 2*i+2;
    //if left child is larger than root
    if(left<n && arr[left]>arr[largest]){
        largest = left;
    }
    //if right child is larger than root
    if(right<n && arr[right]>arr[largest]){
        largest = right;
    }
    //if largest is not root
    if(largest!=i){
        [arr[i], arr[largest]] = [arr[largest], arr[i]];//swap
        //recursively heapify the affected sub-tree
        heapify(arr, n, largest);
    }
}


const arr = [33,22,11,44,66,55,77]

console.log(heapSort(arr))