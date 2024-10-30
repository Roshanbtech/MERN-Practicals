// implement binary search
function binarySearch(arr,target){
 let start = 0;
 let end = arr.length -1;
 while(start <= end){
    let mid = Math.floor((start+end)/2)
    if(arr[mid] === target){
        return mid;
    }else if(arr[mid] < target){
        start = mid + 1
    }else{
        end = mid - 1
    }
 }
}
console.log(binarySearch([1,2,3,4,5,6,7,8,9,10],7))

//binary search using recursion
function binarySearch(arr,target,start,end){
    if(start > end) return -1;
  
    let mid = Math.floor((start+end)/2)
    if(arr[mid]===target){
        return mid;
    }else if(arr[mid]<target){
        return binarySearch(arr,target,mid+1,end)
    }else{
        return binarySearch(arr,target,start,mid-1)
    }
}
 const arr = [1,2,3,4,5,6]
console.log(binarySearch(arr,6,0,arr.length-1))

