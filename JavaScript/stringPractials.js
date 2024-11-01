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


