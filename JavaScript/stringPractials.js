//____________________________________________ STRING PRATICALS ____________________________________________________

//________________________ find length of string
function length(str){
    return str.length
}
console.log(length("Hello"))


//_________________________ reverse string
function reverse(str){
    // return str.split("").reverse().join("")

    let reversed = ""
    for(let i=str.length-1;i>=0;i--){
        reversed += str[i]

    }
    return reversed
}
console.log(reverse("Hello"))


//_______________________ find longest word in string
function longWord(str) {
    return str.split(" ").reduce((a, b) => (a.length > b.length ? a : b));
  }
  console.log(longWord("I am Roshan"));

//_________________________ snake case to pascal case
function snakeCaseToPascalCase(str){
    let result = '';
    str.split('_').forEach(word=>{
        result+= word.charAt(0).toUpperCase() + word.slice(1)
    })
    return result
}
console.log(snakeCaseToPascalCase('i_am_roshan_reji'))

//_________________________ check whether is a palindrome using pointers
function isPalindrome(str){
   let left = 0;
   let right = str.length -1;
   while(left<right){
    if(str[left] !== str[right]){
        return false;
    }
    left++;
    right--;
   }
   return true
}
console.log(isPalindrome("racecar"))

//_________________________ reversal of a string like each words reversed
function reverseWords(str){ 
    return str.split(" ").map(word => word.split("").reverse().join("")).join(" ");
}
console.log(reverseWords("I am Roshan"));
console.log(reverseWords("Hey Tinsu how are you"));


let string = "hihellohihellohihihi"
function count(str){
    let count = 0
    let string = str.split("hi")
    for(let word of string){
        if(word.length>2){
            count++
        }
    }
    return count
}
console.log(count(string))


let str = 'abccdeefggg';

function repElem(str){
    let obj={};
    let string = '';
    for(let char of str){
        if(obj[char]){
            if(!string.includes(char)){
                string+=char
            }
        }else{
            obj[char] = true
        }
    }
    return string
}
console.log(repElem(str))

function ObjToString(input){
    result=''
    for(const key in input){
       result+=`${key}=${input[key]} & `
    }
    
    return result.trim().slice(0,-1);
}

const input = {
   name: 'joe',
   email: 'joe@gmail.com'
};



console.log(ObjToString(input));


// Input: "I love JavaScript"
// Output: "JavaScript"


function l(s){
    let curr = '', long = '';
    for(let i=0;i<s.length;i++){
        if(s[i]===' '){
            if(curr.length>long.length){
                long = curr;
            }
            curr = ''
        }else{
            curr += s[i]
        }
    }
    if(curr.length>long.length){
        long = curr
    }
    return long
}
console.log(l('I love car Javascript'))

// Input: "swiss"
// Output: "w"

function firstUnique(str){
    for(let i = 0;i<str.length;i++){
        let isUnique = true;
        for(let j=i+1;j<str.length;j++){
            if(str[i]===str[j]){
                isUnique = false;
                break;
            }
        }
        if(isUnique){
            return str[i]
        }
    }
    return null
 }
 console.log(firstUnique('swiss'))

 // Input: "camelCase"
// Output: "camel_case"


function conv(str) {
    return str
        .split('') // Split the string into characters
        .map(char => 
            char === char.toUpperCase() // Check if the character is uppercase
                ? '_' + char.toLowerCase() // Convert to lowercase and prepend with an underscore
                : char
        )
        .join(''); // Join the characters back into a string
}

console.log(conv('camelCase'));  // Output: "camel_case"

// Input: "The quick brown fox jumps over the lazy dog"
// Output: true

function panagram(str){
    let string = str.split(" ").join("").toLowerCase().replace(/[^a-z]/g, "");
    let setS = new Set()
    for(let char of string){
      setS.add(char)
    }
    return setS.size === 26
}
console.log(panagram("The quick brown fox jumps 123 over the lazy dog"))

// Input: "hello world"
// Output: "Hello World"

function Captialfirst(str){
    return str.split(' ').map((x)=>x.charAt(0).toUpperCase()+x.slice(1)).join(' ')
  }
  console.log(Captialfirst("hello world"))

  //input:'abc'
//output:['a','b','c','ab','bc','abc']
function subStr(str){
    let sub = [];
    for(let i = 0;i<str.length;i++){
        for(let j=i+1;j<=str.length;j++){
            sub.push(str.slice(i,j))
        }
    }
    return sub
}
console.log(subStr('abc'))

// Input: "+91-(99999)_990999000099"
// Output: "9999909999000099"
const inputString = '+91-(99999)_990999000099';
// const onlyNumbers = inputString.match(/\d+/g).join('');
// console.log(onlyNumbers);
//or
let onlyNumbers = '';
for(let i=0;i<inputString.length;i++){
    const char = inputString[i];
    // if (!isNaN(inputString[i]) && inputString[i] !== ' ')
    if(char >= '0' && char <= '9'){
        onlyNumbers += char;
    }
}
console.log(onlyNumbers);

//pascal case to snake case
// Input: "HelloWorld"
// Output: "hello_world"
function pascalCaseToSnakeCase(str){
    // return str.replace(/([A-Z])/g, '_$1').toLowerCase()
    let result = '';
    for(let i=0;i<str.length;i++){
        if(str[i] === str[i].toUpperCase() && i!=0){
            result+= '_' + str[i].toLowerCase()
        }else{
            result+= str[i].toLowerCase()
        }
    }
    return result
}
console.log(pascalCaseToSnakeCase("HelloWorldOfRoshanReji"))

