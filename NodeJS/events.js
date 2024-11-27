// _______________________Event Emitter____________________________ => used to emit named events and listen for them.
const EventEmitter = require('events');
const emitter = new EventEmitter();
emitter.on('Pizza-Order',(size,topping)=>{
    console.log(`Your order is a ${size} sized ${topping} topped pizza.`);
})
emitter.emit('Pizza-Order','large','pepperoni');

// const fs = require('fs');
// function* generateEvenNumbers() {
//     for (let num = 100; num >= 2; num -= 2) {
//         yield num;
//     }
// }
// function printEvenNumbers() {
//     const numbers = generateEvenNumbers();
//     const results = [];
//     const intervalId = setInterval(() => {
//         const number = numbers.next();
//         if (number.done) {
//             clearInterval(intervalId); // Stop the interval when no more numbers
//             fs.writeFile('numbers.txt', results.join('\n'), (err, data) => {
//                 if (err) throw err;                  
//             });
//         } else {
//             const num = number.value;
//             console.log(num);
//             results.push(num);
//         }
//     }, 300);
// }
// printEvenNumbers();

