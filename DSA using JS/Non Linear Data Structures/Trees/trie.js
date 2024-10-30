// Trie => Digital/ Dictionary/ Prefix Tree
// sorted tree based data structure that stores set of strings.
// has number of pointers = number of characters in the alphabet.
// search words in dictionary with help of prefix
// can store up to 26 letters in a node
// spell checker, autocomplete, spell corrector, browser history, search suggestion
// Time Complexity: O(n)
// Space Complexity: O(n)

class trieNode{
    constructor(){
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie{
    constructor(){
        this.root = new trieNode();
    }
    insert(word){
        let curr = this.root;
        for(let char of word){
            if(!curr.children[char]){
                curr.children[char] = new trieNode();
            }
            curr = curr.children[char];
        }
        curr.isEndOfWord = true;
    }
    search(word){
        let curr = this.root;
        for(let char of word){
            if(!curr.children[char]){
                return false;
            }
            curr = curr.children[char];
        }
        return curr.isEndOfWord;
    }

    delete(word){
        let curr = this.root;
        for(let char of word){
            if(!curr.children[char]){
                return false;
            }
            curr = curr.children[char];
        }
        curr.isEndOfWord = false;
    }

    searchPrefix(prefix){
        let curr = this.root;
        for(let char of prefix){
            if(!curr.children[char]){
                return false;
            }
            curr = curr.children[char];
        }
        return true;
    }

    printWords(root = this.root,currentWord = "",words = []){
        if(root.isEndOfWord){
            words.push(currentWord);
        }
        for(let char in root.children){
            this.printWords(root.children[char],currentWord+char,words);
        }
        return words;
    }

    autoComplete(prefix){
        let curr = this.root;
        for(let char of prefix){
            if(!curr.children[char]){
                return [];
            }
            curr = curr.children[char];
        }
        return this.printWords(curr,prefix);
    }
}

const trie = new Trie();

trie.insert("apple");
trie.insert("apples");
trie.insert("app"); 
trie.insert("ap");
trie.insert("aps");
trie.insert("aple");
trie.insert("aples");
trie.insert("apps");
trie.insert("banana");
trie.insert("ban");
trie.insert("banan");
trie.insert("bananas");
trie.insert("cat");
trie.insert("cats");
trie.insert("car");
trie.insert("cars");


console.log(trie.search("apple")); // true
console.log(trie.search("app")); // true
console.log(trie.search("apps")); // true
console.log(trie.search("apples")); // false
console.log(trie.search("banana")); // true
console.log(trie.search("bananas")); // true
console.log(trie.search("cat")); // true
console.log(trie.search("cats")); // true
console.log(trie.search("car")); // true
console.log(trie.search("cars")); // false

console.log(trie.searchPrefix("app")); // true
console.log(trie.searchPrefix("ap")); // true
console.log(trie.searchPrefix("c")); // true
console.log(trie.searchPrefix("ca")); // true
console.log(trie.searchPrefix("cat")); // true
console.log(trie.searchPrefix("cats")); // true
console.log(trie.searchPrefix("car")); // true
console.log(trie.searchPrefix("cars")); // false
console.log(trie.searchPrefix("b")); // true
console.log(trie.searchPrefix("ba")); // true
console.log(trie.searchPrefix("ban")); // true
console.log(trie.searchPrefix("banan")); // true
console.log(trie.searchPrefix("bananas")); // true
console.log(trie.searchPrefix("banana")); // true
console.log(trie.searchPrefix("ban")); // true
console.log(trie.searchPrefix("b")); // true
console.log(trie.searchPrefix("ba")); // true
console.log(trie.searchPrefix("ban")); // true
console.log(trie.searchPrefix("banan")); // true
console.log(trie.searchPrefix("bananas")); // true
console.log(trie.searchPrefix("banana")); // true
console.log(trie.searchPrefix("ban")); // true

console.log(trie.autoComplete("app")); // ['apple', 'app', 'apps']
console.log(trie.autoComplete("c")); // ['cat', 'cats', 'car', 'cars']
console.log(trie.autoComplete("ca")); // ['cat', 'cats', 'car', 'cars']
console.log(trie.autoComplete("cat")); // ['cat', 'cats', 'car', 'cars']
console.log(trie.autoComplete("cats")); // ['cat', 'cats', 'car', 'cars']
console.log(trie.autoComplete("car")); // ['car', 'cars']
console.log(trie.autoComplete("cars")); // ['car', 'cars']
console.log(trie.autoComplete("b")); // ['banana', 'bananas', 'ban', 'banan', 'bananas', 'banana']
console.log(trie.autoComplete("ba")); // ['banana', 'bananas', 'ban', 'banan', 'bananas', 'banana']
console.log(trie.autoComplete("ban")); // ['banana', 'bananas', 'ban', 'banan', 'bananas', 'banana']
console.log(trie.autoComplete("banan")); // ['banana', 'bananas', 'ban', 'banan', 'bananas', 'banana']
console.log(trie.autoComplete("bananas")); // ['banana', 'bananas', 'ban', 'banan', 'bananas', 'banana']
console.log(trie.autoComplete("banana")); // ['banana', 'bananas', 'ban', 'banan', 'bananas', 'banana'] 