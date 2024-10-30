//Insertion Sort => is a sorting algorithm that builds the final sorted array by iteratively inserting each element into the correct position in the array.
// considering a single sorted list and the reamaining unsorted list and insert the first element of the unsorted list into the correct position in the sorted list.
// time complexity => O(n^2): worst case and average case, best case => O(n)
// space complexity => O(1)

function insertionSort(arr){
      for(let i=1;i<arr.length;i++){
          let temp = arr[i];
          let j = i-1;
          while(j>=0 && arr[j]>temp){
              arr[j+1] = arr[j];
              j--;
          }
          arr[j+1] = temp;
      }
      return arr
}
console.log(insertionSort([5,4,3,2,1,2,3,4,5]))