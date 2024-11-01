//___________________________ ASYNC PROGRAMMING ____________________________________________________
// async programming is a programming paradigm that allows for concurrent execution of multiple tasks without blocking the main thread and in a sequential manner.

//___________________________ CALLBACKS ____________________________________________________
//A callback is a function that is passed as an argument to another function. The callback function is executed after the outer function has finished executing.

let arr = [1,2,3,4,5];
function mainFun(callback){
    callback();
    console.log('code after callback');
}
function callFun(){
    arr.push(100);
}

mainFun(callFun);
console.log('pushData=>',arr);

// Callback to Promise => code becomes complex and difficult to maintain as a result of nested callbacks resulting in callback hell. So use promises instead of callbacks

//___________________________ PROMISES ____________________________________________________
//A promise is an object representing the eventual completion or failure of an asynchronous operation. A promise is either fullfilled or rejected.
//states => pending, fulfilled, rejected
//callbacks => resolve, reject

let promise = new Promise((resolve,reject)=>{
     setTimeout(()=>{
       let skills = ['HTML','CSS','JS','NODE','REACT'];
       if(skills.includes("MONGO")){
        resolve('Full Stack Developer',skills);
       }else{
        reject('Not a Full Stack Developer');
       }
     },1000)
})

promise
.then((dev)=> console.log(dev))
.catch((err)=> console.log(err))

