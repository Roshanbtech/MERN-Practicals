//remove key corresponding to largest number in object
function removeLargestKey(obj) {
  let largestKey = Object.keys(obj).reduce((a, b) => (obj[a] > obj[b] ? a : b));
  delete obj[largestKey];
  return obj;
}
console.log(removeLargestKey({ a: 1, b: 2, c: 3, d: 4 }));

//remove the last key from object
const vegetables = { a: 1, b: 2, c: 3, d: 4 };
function removeLastVegetables(vegetables) {
  let lastKey = Object.keys(vegetables).pop();
  delete vegetables[lastKey];
  return vegetables;
}
console.log(removeLastVegetables(vegetables));

//remove key corresponding to smallest number in object
function remSmallKey(obj){
  let smallestKey = Object.keys(obj).reduce((a,b)=> (obj[a]<obj[b]?a:b));
  delete obj[smallestKey]
  return obj
}
console.log(remSmallKey({ a: 1, b: 2, c: 3, d: 4 }));



