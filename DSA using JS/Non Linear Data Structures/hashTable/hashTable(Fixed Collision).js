//hashtable : data structure that store key value pair in a fixed size array
//collision : when two keys have same hashcode
// for avoiding that we use chaining :- when two keys have same hashcode we store them in same array
// this is an example of fixed collision in hash table using chaining

class HashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size).fill(null).map(() => []);
  }

  // Hash function to compute an index
  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }

  // Add a key-value pair to the hash table
  set(key, value) {
    let index = this.hash(key);
    let bucket = this.table[index];
    let isFound = false;

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket[i][1] = value; // Update value if key exists
        isFound = true;
        break;
      }
    }

    if (!isFound) {
      bucket.push([key, value]);
    }
  }

  // Retrieve a value by key
  get(key) {
    let index = this.hash(key);
    let bucket = this.table[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return bucket[i][1];
      }
    }
    return undefined; // Key not found
  }

  // Remove a key-value pair by key
  remove(key) {
    let index = this.hash(key);
    let bucket = this.table[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        return `Key '${key}' is removed.`;
      }
    }
    return `Key '${key}' not found.`;
  }

  // Check if a key exists
  has(key) {
    let index = this.hash(key);
    let bucket = this.table[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return true;
      }
    }
    return false;
  }

  // Remove duplicate entries by key-value pair
  removeDuplicates() {
    let seen = new Set();

    for (let i = 0; i < this.size; i++) {
      let bucket = this.table[i];

      for (let j = 0; j < bucket.length; j++) {
        let keyValuePair = `${bucket[j][0]}:${bucket[j][1]}`;

        if (seen.has(keyValuePair)) {
          bucket.splice(j, 1);
          j--; // Adjust index to check the next item after deletion
        } else {
          seen.add(keyValuePair);
        }
      }
    }
  }

  // Display the hash table contents
  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i].length > 0) {
        console.log(`Index ${i}:`, this.table[i]);
      }
    }
  }
}

// Example usage:
let hash = new HashTable(10);
hash.set("name", "Roshan");
hash.set("age", 21);
hash.set("city", "Bengaluru");
hash.set("name", "Roshan");
hash.set("name", "Roshan");
hash.display();
console.log("\nRemoving duplicates...");
hash.removeDuplicates();
hash.display();

console.log("\nRemoving 'name'...");
hash.remove("name");
hash.display();
