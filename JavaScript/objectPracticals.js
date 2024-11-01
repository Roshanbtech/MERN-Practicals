//______OPTIONAL CHAINING____
const pr={
  name:'ROSHAN',
  age:22
}
console.log(pr.name?.zip?.address)//instead of error its undefined

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