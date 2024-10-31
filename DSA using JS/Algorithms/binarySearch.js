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
function binarySearchRec(arr,target,start,end){
    if(start > end){
        return false
    }
    let mid = Math.floor((start+end)/2)
    if(arr[mid] === target){
        return mid
    }else if(arr[mid] < target){
        return binarySearchRec(arr,target,mid+1,end)
    }else{
        return binarySearchRec(arr,target,start,mid-1)
    }
}
console.log(binarySearchRec([1,2,3,4,5,6,7,8,9,10],7,0,10))