//______________________________TIMER PRACTICALS________________________________________

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

//___________________________ Order of Execution of Timer Methods in JavaScript

// 1. console.log => Executes immediately as part of synchronous code execution in callstack
console.log("hello world console.log"); // Output will be logged first

// 2. process.nextTick => Executes immediately after the current operation completes but before any asynchronous operations
process.nextTick(() => {
  console.log("hello world process.nextTick"); // Output will be logged second
});

// 3. setTimeout => Executes once after the specified delay (1 millisecond in this case)
const timeout = setTimeout(() => {
  console.log("hello world setTimeout"); // Output will be logged third if not cleared
}, 1);

// 4. setImmediate => Executes at the end of the current event loop cycle
const immediate = setImmediate(() => {
  console.log("hello world setImmediate"); // Output will be logged fourth if not cleared
});

// 5. setInterval => Executes repeatedly at the specified interval (1 second)
const interval = setInterval(() => {
  console.log("hello world setInterval"); // Output will be logged every second if not cleared
}, 1000);

// Clear the timeout and immediate callbacks
clearTimeout(timeout); // Prevents setTimeout callback from executing
clearImmediate(immediate); // Prevents setImmediate callback from executing

// 6. clearInterval => Stops the interval from executing further iterations
// Note: This won't produce output unless called after setInterval starts executing
clearInterval(interval); // Prevents setInterval callback from executing further


