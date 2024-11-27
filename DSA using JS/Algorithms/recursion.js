//recursion => a function that calls itself until a certain condition is met or a base case is reached. And over recursion causes stack overflow.
// time complexity => O(n^2): worst case and average case, best case => O(n)
// space complexity => O(n)

//recursive function for a palindrome
function isPalindrome(str) {
    if (str.length < 2) {
        return true;
    }
    if (str[0] !== str[str.length - 1]) {
        return false;
    }
    return isPalindrome(str.slice(1, -1));// usage of slice here in this code is to remove the first and last character of the string and call the function again.
}

console.log(isPalindrome("racecar"));

//recursive function for reverse a string
function reverse(str){
    if(str.length <= 1 || str === ""){
        return str;
    }
    return reverse(str.slice(1)) + str[0];
    //Or
    // return str.[str.length-1] + reverse(str.slice(0,-1))
}

console.log(reverse("hello"));

//recursive function for factorial
function factorial(n){
    if(n === 1){
        return 1;
    } 
    return n * factorial(n-1);
}
console.log(factorial(5))

//recursive function for fibonacci
function fibonacci(n){
    if(n <= 1){
        return 1;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}
console.log(fibonacci(5))

//sum of number
let arr = [1,2,3,4,5,6,7];

function sum(a){
    if(a.length<=0) return 0
    return a[0] + sum(a.slice(1))
}
console.log(sum(arr))