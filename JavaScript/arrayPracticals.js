//removal of adjacent odd numbers
const adj = (arr) =>
  arr.filter((val, index) => {
    return !(val % 2 !== 0 && arr[index + 1] % 2 !== 0);
  });
console.log(adj([1, 2, 7, 3, 4, 5, 6]));

//remove duplicate odd numbers from array of numbers
const nums = [1, 1, 2, 3, 4, 5, 5, 6, 6, 7, 8, 9, 9];
function dupOdd(nums) {
  let n = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j] && nums[i] % 2 !== 0) {
        if (!n.includes(nums[i])) {
          n.push(nums[i]);
        }
      }
    }
  }
  return n;
  // let res = arr.filter((val,i)=>{
  //     return val%2!==0 && arr.indexOf(val)!== arr.lastIndexOf(val)
  // })
  // const n = [...new Set(res)]

  // return n
}
console.log(dupOdd(nums));

//largest and second largest number in array
function larandseclar(arr) {
  let lar = -Infinity;
  let seclar = -Infinity;
  for (let num of arr) {
    if (num > lar) {
      seclar = lar;
      lar = num;
    } else if (num > seclar && num < lar) {
      seclar = num;
    }
  }
  return `largest number is ${lar} and second largest number is ${seclar}`;
}
console.log(larandseclar([1, 2, 3, 4, 5, 6]));

//small and second small number in array
function smallandsecsmall(arr) {
  let small = Infinity;
  let secsmall = Infinity;
  for (let num of arr) {
    if (num < small) {
      secsmall = small;
      small = num;
    } else if (num < secsmall && num > small) {
      secsmall = num;
    }
  }
  return `small number is ${small} and second small number is ${secsmall}`;
}
console.log(smallandsecsmall([1, 2, 3, 4, 5, 6]));

//__removal of zeros from the array and replace it in the first of the array
let arr = [1, 0, 20, 0, 0, 3, 0, 40, 0];
let zero = [];
let nonZero = [];
function zeroRemoval(arr){
    for(let i=0;i<arr.length;i++){
      if(arr[i]===0){
        zero.push(arr[i])
      } else{
        nonZero.push(arr[i])  
      }
   } 
   return [...zero,...nonZero]
}
console.log(zeroRemoval(arr))

//________find anagram in the list

const words = ['listen','silent','enlist','rat','tar','god','dog'];
function anagram(word){
    let letter = word.split('').sort().join('');
    let anagrams = [];
    for(let i=0;i<words.length;i++){
       if(letter === words[i].split('').sort().join('')){
           anagrams.push(words[i])
       }
    }
    return anagrams
}
console.log(anagram('listen'))

//________transform the object values into a single flattened array

const nam = [{a:'tiger',b:'lion'},{c:'cat',d:'dog'}]
const flatten = nam.map(obj=>Object.values(obj)).flat()
console.log(flatten)

//________calculate cumulative sum with pairs in the array
const a = [[3,43],[4,4],[3,3]];
let cumSum = 100;

a.forEach(pair => {
  const sum = pair[0] + pair[1];
  cumSum -= sum;
  console.log(cumSum);
});

//____________ count duplicates in an array
function dupCount(ar){
  let count = 0;
    for(let i=0;i<ar.length;i++){
      for(let j=i+1;j<ar.length;j++){
        if(ar[i]===ar[j]){
          count++
          break;
        }
    }
}
return `duplicate count of array is ${count}`
}
console.log(dupCount([1,2,3,4,5,1,1,5,5]))

//_________summing elements in nested arrays in array
const ba = [{a: [43, 34, 433, 3]}, {a: [4, -34, 43, 3]}, {a: [4, 34, 43, 3]}, {a: [34, 334, 43, 3]}];
ba.forEach(obj=>{
  const sum = obj.a.reduce((a,b)=>a+b,0);
  console.log(sum)
})

//________summing properties in arrays of objects
const ab = [{af:3},{af:4},{af:5},{af:6}];
const totalSum = ab.reduce((a,b)=>a+b.af,0);
console.log(totalSum)



var groupAnagrams = function(strs) {
  let map = new Map();
  for(let str of strs){
      let sortedStr = str.split('').sort().join('');
      if(!map.has(sortedStr)){
          map.set(sortedStr,[]);
      }
      map.get(sortedStr).push(str);
  }
   return Array.from(map.values())

};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))

//find the number of occurances 

// const arr = [1,1,2,2,3,4,5,6,7,7,8,9];

// function occur(arr){
//     let obj = {};
//     for(let item of arr){
//         if(obj[item]){
//             obj[item]++
//         }else{
//             obj[item] = 1
//         }
//     }
//     return obj
// }
// console.log(occur(arr))

// const arr = [1, 1, 1, 2, 2, 3, 4, 5, 6, 7, 7, 8, 9];

// function occur(arr) {
//     let obj = {};
    
//     // Count occurrences of each item
//     for (let item of arr) {
//         obj[item] = (obj[item] || 0) + 1;
//     }

//     let maxKey = null;
//     let maxTimes = 0;
//     let minKey = null;
//     let minTimes = Infinity; // Set to Infinity to easily find the minimum

//     // Iterate over the object to find the max and min occurrences
//     for (let key in obj) {
//         if (obj[key] > maxTimes) {
//             maxKey = key;
//             maxTimes = obj[key];
//         }
        
//         if (obj[key] < minTimes) {
//             minKey = key;
//             minTimes = obj[key];
//         }
//     }

//     return {
//         maxKey: maxKey,
//         maxTime: maxTimes,
//         minKey: minKey,
//         minTime: minTimes
//     };
// }

// console.log(occur(arr));


//  [123,432,763]
// [367,234,321]

function rev(arr){
  let ne =  arr.reverse()
  const n = [];
  for(let w of ne){
     let word =  parseInt( w.toString().split('').reverse().join(''));
     n.push(word)
  }
  return n
}
console.log(rev([123,432,763]))


// const arr = [[1,2,3,8],[33,44,55,1,2],[2,1,6,8]];

// function remDup(arr){
//             let obj = {};

//     for(let nums of arr){
//         for(let num of nums){
//             if(obj[num]){
//                 obj[num]++
//             }else{
//                 obj[num]=1
//             }
//         }
//     }
//     let uni = [];
//         for(let char in obj){
//             if(obj[char]===1){
//                 uni.push(Number(char))
//             }
//         }
//     return uni
// }
// console.log(remDup(arr))