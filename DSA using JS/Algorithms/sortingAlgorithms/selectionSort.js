// Selection Sort => is a sorting algorithm that selects the smallest element from the unsorted array and places it at the beginning of the array
// time complexity => O(n^2): worst case and average case, best case => O(n^2)
// space complexity => O(1)
let arr = [5, 3, 4, 1, 2, 6, 7, 8, 9, 10];
function selectionSort(arr) {

    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    return arr

}
console.log(selectionSort(arr))