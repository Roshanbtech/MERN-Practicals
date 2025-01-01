//______OPTIONAL CHAINING____
const pr={
  name:'ROSHAN',
  age:22
}
console.log(pr.name?.zip?.address)//instead of error its undefined

//incase of objects keys are strings/symbols
const obj = { key1: 'value1', key2: 'value2' };
obj.key3 = 'value3'; // Add new key-value pair
console.log(obj.key1); // Access value by key

//incase of map keys can be any type object function primitives
const map = new Map();
map.set('key1', 'value1'); // Add key-value pair
map.set({ key: 'key2' }, 'value2'); // Object as key
console.log(map.get('key1')); // Access value by key

//incase of set no keyvalue pairs only unique values
const set = new Set();
set.add(1);
set.add(2);
set.add(1); // Duplicate, will not be added
console.log(set); // Output: Set { 1, 2 }

//incase of weakmap keys having weak references keys are objects and values any type
const weakMap = new WeakMap();
let obj = {};
weakMap.set(obj, 'value');
console.log(weakMap.get(obj)); // Access value by key
obj = null; // Key object eligible for garbage collection

//incase of weakset values having weak references values are objects
const weakSet = new WeakSet();
let obj = {};
weakSet.add(obj);
console.log(weakSet.has(obj)); // true
obj = null; // Object eligible for garbage collection


//______OBJECT METHODS_______
//______1.1.Object.entries()___:returns an array of key-value pairs from an object
const shelt={animal:'LION',shelter:'Den'}
const entries=Object.entries(shelt)
console.log(entries)

//______1.2.Object.keys()____:returns an array of objects own enumerable string-keyed property names.
const sound={sound:'roar',animal:'lion'}
console.log(Object.keys(sound))

//______1.3.Object.values()___:returns an array of a given objects own enumerable string-keyed property values.
const action={action:'crawl',reptile:'snake'}
console.log(Object.values(action))

//______1.4.Object.freeze()____:completely immutable, so we can't add or remove or edit existing properties
const per={name:'ROSHAN',age:22}
Object.freeze(per)
per.name='ROBBIN'
console.log(per)

//______1.5.Object.seal()_____:can't add or remove properties but can change existing properties
const author={name:'Rowling',book:'HARRY POTTER'}
Object.seal(author)
author.book='GOT'
console.log(author)

//______1.6.Object.isSealed()___:returns true if an object is sealed
const author1={name:'Rowling',book:'HARRY POTTER'}
console.log(Object.isSealed(author1))

//______1.7.Object.isFrozen()___:returns true if an object is frozen
const author2={name:'Rowling',book:'HARRY POTTER'}
console.log(Object.isFrozen(author2))

//______1.8.Object.isExtensible()___:returns true if an object is extensible
const author3={name:'Rowling',book:'HARRY POTTER'}
console.log(Object.isExtensible(author3))

//______1.9.Object.assign()___:merges multiple objects into a single object
const author4={name:'Rowling',book:'HARRY POTTER',author:'JK Rowling'}
const author5={name:'Rowling',book:'Star Wars'}
const author6={name:'Rowling',book:'HARRY POTTER'}
const author7={name:'Rowling',book:'HARRY POTTER'}

console.log(Object.assign(author4,author5,author6,author7))

//______1.10.Object.create()___:returns a new object that has a specified prototype
const author8 = { name: 'Rowling', book: 'HARRY POTTER' };
const author9 = { name: { value: 'Rowling', enumerable: true }, book: { value: 'HARRY POTTER', enumerable: true } };

const newAuthor = Object.create(author8, author9);
console.log(newAuthor);

//______1.11.Object.getPrototypeOf()___:returns the prototype of an object
const author10={name:'Rowling',book:'HARRY POTTER'}
console.log(Object.getPrototypeOf(author10))

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

//sum of all values in object
const a={a:99,l:[10,11,22]}
const sum = Object.values(a).flat().reduce((ac,cv)=>ac+cv,0)
console.log(sum)

const e=[{e:34,g:45},{aa:34,fg:90},{eh:34,gi:45}]
let summ=0
for(let obj of e){
  for(let key in obj){
    summ+=obj[key]
  }
}
console.log(summ)
//or
const ee = e.reduce((arr,obj)=> arr.concat(Object.values(obj)),[])
console.log(ee)
const ff = ee.reduce((ac,cv)=>ac+cv,0)
console.log(ff)

//------ result should be in the format of { a, b, sum: a + b } in an array
const ba = [1, 4, 0, 0, 12, 4, 23, 2];
let result = [];
for(let i=0;i<ba.length;i+=2){
  let a = ba[i];
  let b = ba[i+1] !== undefined ? ba[i+1] : 0;
  result.push({a,b,sum:a+b})
}
console.log(result)

//_________summing even values in object using reduce
const ob = {a:1,b:2,c:3,d:4}
const evenSum = Object.values(ob).reduce((a,b)=>b%2===0?a+b:a,0)
console.log(evenSum,'even sum')
//______summing odd values in object
let s = 0;
for(let key in ob){
  if(ob[key]%2!==0) s += ob[key]
}
console.log(s,'odd sum')

//----------removing string values from object 

const obj = {
  "name":"Roshan",
  "age":22,
  "place":"Chengannur",
  "locality":"Venmony",
  "pincode": 689509,
  "country-code": +91,
  "isFound":true
}

// const filteredObj = Object.fromEntries(
//     Object.entries(obj).filter(([key,value])=>typeof value!=='string')
//     )
// console.log(filteredObj)

const filtered = {};
for(let key in obj){
  if(typeof obj[key] !== 'string'){
      filtered[key] = obj[key]
  }
}
console.log(filtered)

// getting number values from object

let phone = '+91-(999)-(0009090)';

// 919990009090
function strMan(str){
  let res = ''
  for(let char of str){
    // if(!isNaN(char) && char!==' ')
    if(char >='0' && char<="9"){
      res+=char;
    }
  }
  return res
}
console.log(strMan(phone))

// find sum of values where length is greater than 3
const obj = {a:[5,3,4,8,6],b:[6,7,2],c:[86,42,35,76,15,86],d:[1]}

// 366
function sum(obj){
  let sum = 0
    for(let key in obj){
      if(obj[key].length>3){
          sum+= obj[key].reduce((acc,curr)=>{
            return acc+curr
          },0)
      }
    }
    return sum
}
console.log(sum(obj))

//overall sum of obj
const x = {a:3,b:4,c:[20,1,34,55]};
// const sum = Object.values(x).flat().reduce((a,b)=>a+b,0);
//or
function sum(x){
   let sum = 0;
   for(let key in x){
    if(typeof x[key] === 'number'){
      sum+=x[key]
    } else if(Array.isArray(x[key])){
      sum+=x[key].reduce((a,b)=>a+b,0)
    }
   }
   return sum
}
console.log(sum(x))

const xz = [[1,2,3,4],[2,3,4,5],[2,3,4,5],[8,5,6,7,8]]

function ind(xz){
    let res = [];
    xz.forEach((arr, i) => {
        if (i < arr.length) {
            res.push(arr[i]);
        }
    });
    return res;
}
console.log(ind(xz))

