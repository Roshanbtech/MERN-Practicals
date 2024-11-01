//________________function types_______________________

//1. function declaration
function add(a,b){
    return a+b
}
console.log(add(2,3))

//2. Anonymous function or function expression => function having no name and is assigned to a variable 
const sub = function(a,b){
    return a-b
}
console.log(sub(2,3))

//3. Pure function => function given same inputs and returns same output and has no side effects.
function mul(a,b){
    return a*b
}
console.log(mul(2,3))

//4. Impure function: given the same inputs, it may return different outputs and has side effects.
let counter = 0;

function div(a, b) {
    counter++; // Modifies external state (counter)
    return a / b;
}
console.log(div(2, 3)); // Output: 0.666...
console.log(div(2, 3)); // Output: 0.666... (same input but side effect occurs)
console.log(counter); // Output: 2 (side effect: counter has been modified)

//5. Arrow function => function written in one line and is assigned to a variable dont have this keyword and dont have a name.
const addArrow = (a, b) => a + b;
console.log(addArrow(2, 3));

//6.Method Function => function defined as property of an object. It can use this keyword to access the object's properties.
const person = {
    name: 'John',
    age: 30,
    sayHello: function () {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
person.sayHello();

//7. Class Function => function defined as a class. It can use this keyword to access the class's properties.
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const person1 = new Person('John', 30);
person1.sayHello(); 

//8. Constructor function => function used to create multiple instances of an object with the same properties and methods.
function Person1(name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function () {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    };
}
const person2 = new Person1('Jane', 25);
person2.sayHello();

//9. IIFE => Immediately Invoked Function Expression => function that is called immediately after it is defined
(function () {
    console.log('Hello, IIFE!');
})()

//10. Closures => function that has access to its outer scope even after the outer function has returned.
function outer() {
    let name = 'John';
    function inner() {
        console.log(name);
    }
    return inner;
}

const innerFn = outer();
innerFn(); // Output: John

//11. Callback function => function passed as an argument to another function which is then invoked inside that parent function
const arr = [1, 2, 3, 4, 5];

function mainFun(callback) {
    callback(arr);
}

function callFun(arr) {
    arr.push(100);
}
callFun(arr);
console.log(arr); // Output: [1, 2, 3, 4, 5, 100]

//12. High order function => function that takes another function as an argument or returns a function
// example of higher order function => map, filter, reduce, forEach, some, every, find and so on
//advantages: reduces code length, reduces bugs, improves readability, reduces code duplication

function createMultiplier(factor) {
    return function(x) {
        return x * factor;
    };
}

const double = createMultiplier(2);
console.log(double(5)); // Output: 10

//13. Factory function => function that returns an object
const createPerson = (name, age) => {
    return {
        name,
        age
    };
};
const person3 = createPerson('John', 30);
console.log(person3); // Output: { name: 'John', age: 30 }

//14. Generator function => function that returns an iterator
function* generateSequence() {
    yield 1;
    yield 2;
    yield 3;
}
const generator = generateSequence();
console.log(generator.next().value); // Output: 1
console.log(generator.next().value); // Output: 2
console.log(generator.next().value); // Output: 3

//15. Async function => function that returns a promise
async function fetchUser() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const user = await response.json();
    return user;
}
fetchUser().then(user => {
    console.log(user);
});

//16. Recursive function => function that calls itself
function factorial(n) {
    if (n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(5)); // Output: 120

//17. Promise function => function that returns a promise
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise resolved');
    }, 1000);
});
promise.then(result => {
    console.log(result);
});

// 18. Thunk => delays the execution of a function
function thunkify(fn) {
    return function(...args) {
        return function() {
            return fn(...args);
        };
    };
}

const ad = (a, b) => a + b;
const thunk = thunkify(ad)(2, 3);
console.log(thunk()); // Output: 5

//19. First class function => function that can be assigned to a variable, passed as an argument, returned from another function, etc.
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const functions = [add, subtract, multiply, divide];

for (let i = 0; i < functions.length; i++) {
    console.log(functions[i](2, 3));
}


