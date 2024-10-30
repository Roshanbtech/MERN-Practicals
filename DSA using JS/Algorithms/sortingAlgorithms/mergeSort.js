// merge sort => is a divide and conquer algorithm that divides the input array into two halves, calls itself for the two halves, and then calls merge() to merge the two halves.
// time complexity => O(nlogn): worst case and average case, best case => O(nlogn)
// space complexity => O(n)

function mergeSort(arr){
    //base case: when the array has only one element, it is already sorted
     if(arr.length <=1) return arr;
    //split the array into two halves
     const middle = Math.floor(arr.length/2);
     const left = arr.slice(0,middle);
     const right = arr.slice(middle);
    //sort the left and right halves recursively
     return merge(mergeSort(left),mergeSort(right));
}

function merge(left,right){
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    // merge 2 arrays while there are elements in both arrays
    while(leftIndex < left.length && rightIndex < right.length){
        if(left[leftIndex] < right[rightIndex]){
            result.push(left[leftIndex]);
            leftIndex++;
        }else{
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    // add the remaining elements from the left array
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex)); 
}

console.log(mergeSort([50,34,43,62,10,1]))