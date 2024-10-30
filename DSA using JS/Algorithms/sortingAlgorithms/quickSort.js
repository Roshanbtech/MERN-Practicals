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