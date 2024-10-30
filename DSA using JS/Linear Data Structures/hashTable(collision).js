//basic hashTable setup with linear probing is considered as a linear data structure using array but it results with a higher collision rate

class hashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }
  //hashing function: takes a string and returns a number between 0 and size - 1

  hash(key) {
    //converting string to number
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }

  //set key value pair in hash table
  set(key, value) {
    let index = this.hash(key);
    this.table[index] = value;
  }
  //get value from hash table
  get(key) {
    let index = this.hash(key);
    return this.table[index];
  }
  //remove value from hash table
  remove(key) {
    let index = this.hash(key);
    this.table[index] === undefined;
  }
  //check if key is in hash table
  has(key) {
    let index = this.hash(key);
    return this.table[index] !== undefined;
  }
  //duplicate key in hash table is not allowed
  //if key is duplicate, the value will be overwritten
  //return all the keys in hash table
  keys() {
    let keys = [];
    for (let i = 0; i < this.size; i++) {
      if (this.table[i] !== undefined) {
        keys.push(i);
      }
    }
    return keys;
  }

  //return all the values in hash table
  values() {
    let values = [];
    for (let i = 0; i < this.size; i++) {
      if (this.table[i] !== undefined) {
        values.push(this.table[i]);
      }
    }
    return values;
  }

  //return all the key value pairs in hash table
  entries() {
    let entries = [];
    for (let i = 0; i < this.size; i++) {
      if (this.table[i] !== undefined) {
        entries.push([i, this.table[i]]);
      }
    }
    return entries;
  }

  //display hash table
  display() {
    for (let i = 0; i < this.size; i++) {
      if (this.table[i] !== undefined) {
        console.log(i, this.table[i]);
      }
    }
  }
}

const hash = new hashTable(50);
hash.set("name", "Roshan");
hash.set("age", 21);
hash.set("city", "Bengaluru");

console.log(hash.get("name"));
console.log(hash.get("age"));
console.log(hash.get("city"));

hash.display();

hash.remove("name");
hash.display();

hash.set("name", "Roshan");
hash.set("age", 21);
hash.set("city", "Bengaluru");

console.log(hash.has("name"));
console.log(hash.has("age"));
console.log(hash.has("city"));

hash.display();

console.log(hash.keys());
console.log(hash.values());
console.log(hash.entries());

//but using this normal setup is not efficient
//it is better to use an array as hash table
//here we used to map a key to a value in hash table
//this is called hashing
//hashing is a technique used to map a key to a value in a hash table
//but this approach will result in a collision
//this is called linear probing
// we can make use of bucket or linked list to resolve the collision
//this is called chaining
