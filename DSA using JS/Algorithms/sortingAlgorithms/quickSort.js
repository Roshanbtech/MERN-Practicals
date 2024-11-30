// Quick Sort => is a divide and conquer algorithm that selects an element as pivot and partitions the given array around the picked pivot.
// time complexity => O(nlogn): worst case and average case, best case => O(n)
// space complexity => O(logn)

const quickSort = (arr) => {

    if(arr.length <= 1) return arr;
    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<pivot){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)];
}
console.log(quickSort([5,4,3,2,1,2,3,4,5]))

function findMid(arr){
    let slow = 0;let fast = 1;
    while(fast < arr.length && fast+1 < arr.length){
        slow +=1
        fast +=2
    }
    return arr[slow]
}
console.log(findMid([5,4,3,2,1,2,3,4,5]))

//more efficient solution
function quickSort(arr, low=0, high=arr.length-1){
    if(low<high){
        const pivotIndex = partition(arr,low,high);
        quickSort(arr,low,pivotIndex-1);
        quickSort(arr,pivotIndex+1,high);
    }
    return arr;
}
function partition(arr,low,high){
    let pivot = arr[high];
    let i = low-1;
    for(let j=low;j<high;j++){
        if(arr[j]<pivot){
            i++;
            [arr[i],arr[j]] = [arr[j],arr[i]];
        }
    }
    [arr[i+1],arr[high]] = [arr[high],arr[i+1]]
    return i+1
}
console.log(quickSort([10,1000,23,48,32]))