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
//___________________________ CALLBACK HELL ____________________________________________________
//callback hell is a situation where multiple callbacks are nested inside each other, making the code difficult to understand and maintain.

let main = (callback1, callback2) => {
    callback1();
    callback2();
}
main(() => {
    console.log('callback1');
}, () => {
    console.log('callback2');
});

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

//types of promises
//1. promise.all => when all promises are resolved
const promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('Promise 1');
    },1000)
})
const promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('Promise 2');
    },2000)
})
const promise3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('Promise 3');
    },3000)
})
Promise.all([promise1,promise2,promise3]).then((values)=>{
    console.log(values);
})
//2. promise.race => when a single promise is resolved or rejected / the first settled promise is returned
const promise4 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('Promise 4');
    },1000)
})
const promise5 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject('Promise 5');
    },2000)
})
Promise.race([promise4,promise5]).then((value)=>{
    console.log(value);
})
//3. promise.any => when any of the promises are resolved/ the first resolved promise is returned
const promise6 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('Promise 6');
    },1000)
})
const promise7 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject('Promise 7');
    },2000)
})
Promise.any([promise6,promise7]).then((value)=>{
    console.log(value);
})
//4. promise.allSettled => when all promises are settled or not settled it will return an array of settled promises with status and value
const promise8 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('Promise 8');
    },1000)
})
const promise9 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject('Promise 9');
    },2000)
})
Promise.allSettled([promise8,promise9]).then((value)=>{
    console.log(value);
})
//5. promise.finally => it will execute the function whether the promise is resolved or rejected or both 
const promise10 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('Promise 10');
    },1000)
})
promise10.finally(()=>{
    console.log('finally');
})

//___________________________ ASYNC AWAIT ____________________________________________________
// async function is a function that is marked with the async keyword. It returns a promise.
// await keyword is used to wait for the promise to resolve.

async function Powers(){
      let harryPotter = new Promise((resolve,reject)=>{
        setTimeout(()=>{
          resolve('Expecto patronum');
        },1000)
      })
      let voldemort = new Promise((resolve,reject)=>{
        setTimeout(()=>{
          resolve('Avada Kedavra');
        },2000)
      })
      let snape = new Promise((resolve,reject)=>{
        setTimeout(()=>{
          resolve('Sectumsempra');
        },3000)
      })
      console.log('fetching power of harry potter...');
      let power1 = await harryPotter;
      console.log('fetching power of voldemort...');     
      let power2 = await voldemort;
      console.log('fetching power of snape...');
      let power3 = await snape;
      return [power1,power2,power3];
}
console.log('Welcome to the world of mystical powers in Hogwarts');

Powers().then((powers)=>{
    console.log(powers);
})

//Promisify => it takes a function and returns a function
//it converts a function that takes callback as an argument to a function that returns a promise

const promisify = (fn)=>{
    return (...args)=>{
        return new Promise((resolve,reject)=>{
            fn(...args,(err,data)=>{
                if(err){
                    reject(err);
                }else{
                    resolve(data);
                }
            })
        })
    }
}
const fetchPower = promisify(Powers);
