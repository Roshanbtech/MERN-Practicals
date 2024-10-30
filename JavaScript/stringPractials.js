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

