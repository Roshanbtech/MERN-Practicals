//________________________JavaScript Practicals______________________________________

//________________________ generate 6 digit otp
function generateOTP() {
  const otp = Math.floor(Math.random() * 900000 + 100000);
  return otp;
}
console.log(generateOTP());

//________________________ find factorial of a number
function factorial(n) {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact = fact * i;
  }
  return fact;
}
console.log(factorial(5));

//________________________CURRYING : technique used to transform a function having multiple arguments into a function having one argument in a sequential manner.__________
//___normal___
const add = (a, b, c) => {
    return a + b + c;
  };
  console.log(add(1, 2, 3));
  
  //___curried one___ : advantages=> pass one args at a time, reduce code length, reduces bugs, improves readability, reduces code duplication
  const sum = (a) => {
    return (b) => {
      return (c) => {
        return a + b + c;
      };
    };
  };
  console.log(sum(1)(2)(3));
  
  //________________________ call back function: function passed as an argument to another function which is then invoked inside that parent function
  const arr = [1, 2, 3, 4, 5];
  
  function mainFun(callback) {
    callback(arr);
    console.log(arr);
  }
  
  function callFun(arr) {
    arr.push(100);
  }
  
  mainFun(callFun);
  
  //________________________ Higher order function: function passed as an argument to another function which is then invoked inside that parent function
  // example of higher order function => map, filter, reduce, forEach, some, every, find and so on
  //advantages: reduces code length, reduces bugs, improves readability, reduces code duplication
  const arr2 = [1, 2, 3, 4, 5];
  const arr3 = [1, 2, 3, 4, 5];
  function mainFn(fn) {
    fn(arr2);
    console.log(arr2);
    fn(arr3);
    console.log(arr3);
  }
  function callFn(arr) {
    arr.push(100);    
  }
  mainFn(callFn);

  //________________________Counter function creation from 1 to 10
  const counter = () =>{
    let count = 0;
    let intervalId = setInterval(()=>{
        count++;
        console.log(count);
        if(count>=10){
            clearInterval(intervalId);
            console.log('counter stopped');
        }
    },1000)
  }
  counter()

  //_________________________Generator function: function that can be paused and resumed at any time with the help of yield keyword 
  // applications of generator function: 1. to create iterators, 2. to create asynchronous iterators
  function* evenNums(){
    let num = 0;
    for(let i=0;i<=10;i++){
        yield num = num+2;
    }
  }
  const gen = evenNums();
  for(let val of gen){
      console.log(val)
  }

  //_________________________Check whether a number is a fraction or not
  function isFraction(num){
    num%1 === 0 ? console.log(`${num} is not a fraction`) : console.log(`${num} is a fraction`);
  }
  isFraction(5);
  isFraction(5.5);

  //_________________________Check whether a number is prime or not
  function isPrime(num){
     for(let i=2;i<num;i++){
      if(num%i === 0){
        console.log(`${num} is not a prime number`);
        break;
      }
      if(i===num-1){
        console.log(`${num} is a prime number`);
      }
     }
  }
  
  isPrime(5);
  isPrime(7);
  isPrime(12);

  // ----------------------------- call, apply, and bind methods -----------------------------------
// Purpose: These methods are used to pass an owner object as an argument to a function,
//          or to set the value of the `this` keyword in a function. This concept is known 
//          as "function borrowing."

const person = {
  name: "Roshan",
  getDetails: function(age, city) {
      console.log(`My name is ${this.name}, I am ${age} years old, and I live in ${city}.`);
  }
};

// 1. call() Method:
//    - Invokes the function immediately.
//    - Sets `this` to the specified owner object.
//    - Additional arguments are passed individually (not as an array).

person.getDetails.call({ name: 'Robbin' }, 20, 'Chennai');
// Output: "My name is Robbin, I am 20 years old, and I live in Chennai."

// 2. apply() Method:
//    - Invokes the function immediately.
//    - Sets `this` to the specified owner object.
//    - Additional arguments are passed as an array.

person.getDetails.apply({ name: 'Seena Reji' }, [53, 'Chennai']);
// Output: "My name is Robbin, I am 20 years old, and I live in Chennai."

// 3. bind() Method:
//    - Does not immediately invoke the function.
//    - Returns a new function with `this` bound to the specified owner object.
//    - Additional arguments can be passed and will be preserved when the new function is invoked.

const getPerson = person.getDetails.bind({ name: 'Rosina' });
getPerson(19, 'Chennai');
// Output: "My name is Robbin, I am 20 years old, and I live in Chennai."
