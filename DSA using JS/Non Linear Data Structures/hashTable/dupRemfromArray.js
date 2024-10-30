// duplicate removal from array and its count

function dupRemAndCount(arr) {
     let seen = new Set();
     let count = 0;
     let unique = [];
     let dup = [];
     for(let i=0;i<arr.length;i++){
        if(!seen.has(arr[i])){
            seen.add(arr[i]);
            unique.push(arr[i]);
        }else{
            dup.push(arr[i]);
            count++;    
        }
     }
     return {
        unique: unique,
        duplicate: dup,
        duplicateCount: count
     }
}   
console.log(dupRemAndCount([1, 2, 3, 4, 1, 2, 3, 4, 5, 6, 7, 8, 9, 9])); 
