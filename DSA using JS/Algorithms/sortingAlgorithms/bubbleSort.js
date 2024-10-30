// bubble sort => is a comparison based sorting algorithm in which each pair of adjacent elements is compared and if they are not in order then they are swapped.
// time complexity => O(n^2): worst case and average case, best case => O(n)
// space complexity => O(1)

const bubbleSort = (arr) =>{
    let n = arr.length;
    let swapped;
    for(let i=0;i<n-1;i++){
        swapped = false;
        for(let j=0;j<n-i-1;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                swapped = true;
            }
        }
        if(!swapped){
            break;
        }
    }
    return arr
}

console.log(bubbleSort([5,4,3,2,1]))  // worst case => O(n^2)
console.log(bubbleSort([1,2,3,4,5])) // best case => O(n)
console.log(bubbleSort([5,4,3,2,1,2,3,4,5])) // average case => O(n^2)