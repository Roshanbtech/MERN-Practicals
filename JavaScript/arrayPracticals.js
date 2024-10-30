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