// removal of duplicates from a string

function removeDuplicates(str) {
  let seen = new Set();
  let unique = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (!seen.has(char)) {
      seen.add(char);
      unique += str[i];
    }
  }
  return unique;
}

console.log(removeDuplicates("Roshan Reji Chacko"));

//Time Complexity: O(n)
//Space Complexity: O(n)
//because we are using set data structure to store unique characters
