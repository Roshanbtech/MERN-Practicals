//__________________________________JAVASCRIPT PROBLEMS__________________________________________

//________1.CURRYING__________
//___normal___
const add=(a,b,c)=>{
    return a+b+c
}
console.log(add(2,2,2))
//____curried one______
const sum=(a)=>{
    return(b)=>{
        return(c)=>{
            return a+b+c
        }
    }
}
console.log(sum(2)(2)(2))

//______2.OPTIONAL CHAINING____
const pr={
    name:'ROSHAN',
    age:22
}
console.log(pr.name?.zip?.address)//instead of error its undefined

//______3.OBJECT METHODS_______
//______3.1.Object.freeze()____:completely immutable, so we can't add or remove or edit existing properties
const per={name:'ROSHAN',age:22}
Object.freeze(per)
per.name='ROBBIN'
console.log(per)
//______3.2.Object.seal()_____:can't add or remove properties but can change existing properties
const author={name:'Rowling',book:'HARRY POTTER'}
Object.seal(author)
author.book='GOT'
console.log(author)
//______3.3.Object.entries()___:returns an array of key-value pairs from an object
const shelt={animal:'LION',shelter:'Den'}
const entries=Object.entries(shelt)
console.log(entries)
//_____3.4.Object.keys()____:returns an array of objects own enumerable string-keyed property names.
const sound={sound:'roar',animal:'lion'}
console.log(Object.keys(sound))
//____3.5.Object.values()___:returns an array of a given objects own enumerable string-keyed property values.
const action={action:'crawl',reptile:'snake'}
console.log(Object.values(action))

//_______________object problems__________________
//1.______________
const a={a:99,l:[10,11,22]}

const aa=Object.values(a).flat()
console.log(aa)
console.log(aa.reduce((ac,cv)=>ac+cv,0))
//2._____________
const e=[{e:34,g:45},{aa:34,fg:90},{eh:34,gi:45}]

// let summ=0;
// for(let obj of e){
//     for(let key in obj){
//         summ+=obj[key]
//     }
// }
// console.log(summ)

const ee=e.reduce((arr,obj)=>arr.concat(Object.values(obj)),[])
console.log(ee)
const ff=ee.reduce((ac,cv)=>ac+cv,0)
console.log(ff)

//_____________factory function_______________: returns an object when it is called, and it’s a way to create objects with a similar structure.
function newFn(fname,lname){
    return{
        fname:fname,lname:lname,get fullname(){
            return this.fname+' '+this.lname
        }
    }
}
console.log(newFn('ROSHAN','REJI').fullname)

//_____________callback function___:function passed as an argument to another fn which is then invoked inside that parent function
let an=[1,2,3,4,5]
function mainFn(cb){
    cb()
    console.log('code modified')
}
function calFn(){
 an.pop()
 an.push(100)
}
mainFn(calFn)
console.log(an)

//_____________IIFE:selfinvoking/immediately invoked
console.log((function(u,y){
    return u+y
})(3,2))

//________________________________logic problems____________________________________________
//1._______________largest and second largest no.___________
function larandseclar(cb){
let lar=-Infinity
let seclar=-Infinity
    for(let i=0;i<cb.length;i++){
        if(cb[i]>lar){
            seclar=lar;
            lar=cb[i]
        }
        else if(cb[i]>seclar&&cb[i]<lar){
            seclar=cb[i]
        }
    }
    return [lar,seclar]
}
console.log(larandseclar([11,99,22,49,33]))

//2.________________array reversal___________________
// let ag = [1,2,3,4,5]; // Ensure 'ag' is defined in the scope where 'calFn' will be called
// function arrRev(cb){
//     cb();
//     console.log('code modified');
// }
// let br = [];
// function calFn(){
//    for(let i = ag.length - 1; i >= 0; i--){
//        br.push(ag[i]);
//    } 
// }
// arrRev(calFn); // Now 'ag' is defined when 'calFn' is called
// console.log(br); // Outputs: [5, 4, 3, 2, 1]

//3._________________Palindrome__________________________
let string='BABABAB'
let isPalind=true
for(let i=string.length-1;i>=0;i--){
    if(string[i]!==string[string.length-i-1]){
        isPalind=false
        break
    }
}
if(isPalind){
    console.log('true')
}
else{
    console.log('false')
}
//4._________________string reversal________________________
function strRev(str){
let temp=''
for(let i=str.length-1;i>=0;i--){
    temp+=str[i];
}
return temp;
}
console.log(strRev('ROSHAN'));
//5._______________prime number______________________________
function isPrime(num){
    if(num<2){
        return false
    }
    for(let i=2;i<num;i++){
        if(num%i===0){
            return false
        }
        return true
    }
}
console.log(isPrime(4))
//6._________________generator function to find multiple of 5______________
function*multipleof5(){
    for(let i=0;i<=10;i++){
        if(i%2==0){
            yield i*5
        }
    }
}
const generator=multipleof5()
for(val of generator){
    console.log(val)
}
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())

//7.___CALL___:fn borrowing,direct execution,calls a fn with owner object passed as an argument,additional args seperately
const person={
    fname:'ROSHAN',
    lname:'REJI'
}
const p1={
     funame:function(country,state){
        return this.fname+' '+this.lname+' of '+country+' in '+state
     }
}
console.log(p1.funame.call(person,'INDIA','KERALA'))
//8.____APPLY____:fn borrowing,similar to call,but additional args is passed as an array
console.log(p1.funame.apply(person,['India','Kerala']))
//9.____BIND_____:fn borrowing, not immedite execution, returns a new fn with desired context and arguments
const love1={
    fname:'Hiral',
    lname:'Rishin',
    funame:function(){
        return this.fname+' '+this.lname
    }
}
const love={
    fname:'JENNIE',
    lname:'ROSHAN'
}
let fullLove=love1.funame.bind(love)
console.log(`My future wife's name is ${fullLove()}.`)

//10.___________________________SUM OF INFINITE ARGUMENTS_________________________________
function sumOfinf(...args){
    console.log(args.reduce((ac,cv)=>ac+cv,0))
}
sumOfinf(1,2,3,4,5,6,7,8,9,10)

//11.__________________________EVEN SUM____________________________________________
function evenSum(arr){
    let sum=0
    for(let i=0;i<=arr.length;i++){
        if(arr[i]%2===0){
            sum+=arr[i]
        }
    }
    return sum
}
console.log(evenSum([1,2,3,4,5,6]))

//12._________________________LONGEST WORD IN STRING___________________________
function longWord(str){
    let a=str.split(' ')
    let r=''
    for(let i=0;i<a.length;i++){
        if(a[i].length>r.length){
            r=a[i]
        }
    }
    return r
}
console.log(longWord('I AM ROSHAN WHO IS IN LOVE WITHH JENNIFER'))

//__________________Shallow copy____________
const af={an:'pr',bn:{bbn:'cr'}}
const ab={...af}
ab.an='br'
console.log(af)
ab.bn.bbn='sr'
console.log(af)
const cc=af
cc.an='vr'
console.log(af)
//________________Deep copy______________
const bb={bbc:'in',ccb:{vcc:5}}
const vv=JSON.parse(JSON.stringify(bb))
vv.bbc='out'
vv.ccb.vcc=2
console.log(bb)
console.log(vv)
//_____________________________forEach________________________________
var az=[1,2,3,4,5]
az.forEach((val,index)=>{
if(val>2){
    az[index]=val*val
    console.log(az[index])
}})

let summ=0
az.forEach((val)=>{
    summ=summ+val
})
console.log(summ)

var sz=[1,2,'3',4,5]
let sm=0
sz.forEach((val)=>{
    if(typeof val!=='string'){
   sm=sm+val}
})
console.log(sm)

//_____________read a file sync_____________
const fs=require('fs')
const data=fs.readFileSync('new.txt','utf8')
console.log(data)

//_______________Event Emitter____________________
const Emitter=require('events')
const myEmitter=new Emitter()
myEmitter.on('order-pizza',(size,topping)=>{
    console.log(`Your order is a ${size} sized ${topping} topped pizza`)
})
myEmitter.emit('order-pizza','large','mushroom')

//_________________hhtp server_______________
// const http=require('http')
// http.createServer((req,res)=>{
//       res.writeHead(200,{'Content-Type':'text/plain'})
//       res.write('Hello')
//       res.end('
// Bye')
// }).listen(8080,()=>{
//     console.log("port is running at server:'http://localhost:8080'")
// })

//___________________________express server_______________________
const express=require('express')
const app=express()
app.get('/',(req,res)=>{
    res.send('hello')
})
app.get('/:user',(req,res)=>{
    const user=req.params.user
    const username=req.query.username
    const userage=req.query.userage
    if(user%2===0){
        res.send(`I'm ${username}`)
    }
    else{
        res.send(`I'm ${userage} years old`)
    }
})
app.listen(8080,()=>{
    console.log('http://localhost:8080')
})

//___________________array destructuring_________________________________
const ve=[1,2,3,4,5]
const[v1,v2,...v3]=ve
console.log(v1,v2,...v3)
//___________________object destructuring________________________________
const oh={name:'hi',age:1}
const{name,age}=oh
console.log(name,age)
//
// function dupl(cb){
//      let uni=[]
//      for(let i=0;i<cb.length;i++){
//         if(uni.indexOf(cb[i])===-1){
//             uni.push(cb[i])
//         }
//      }
//      return uni
// }
// console.log(dupl([1,2,2,3,3,4,4,5]))

function duplicate(arr){
    const uniqueElement=[];
    for(let i=0;i<arr.length;i++){
        if(uniqueElement.indexOf(arr[i])===-1){
            uniqueElement.push(arr[i]);
        }
   }
   return uniqueElement;
}
console.log(duplicate([1,2,3,1,3,5,6,8,8]));


//....app.js.....................
// const http = require('http');
// const server = http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type':'text/html'})
//     res.end('Hello Roshan');
// }).listen(4002,()=>{
//     console.log("servver created")
// })

// const express = require('express');
// const session = require('express-session');

// const os = require('os');
// const app = express();

// app.use(session({
//     secret: "secret-key",
//     resave: false,
//     saveUninitialized: true,
//     // cookie: { maxAge: 60000 } // Session expires after 1 minute (60000 milliseconds)
//     cookie: {
//         maxAge: 3600000, // 1 hour in milliseconds
//         secure: false, // Cookie only sent over HTTPS
//         httpOnly: true, // Cookie only accessible by the server
//     }
// }))

// // app.get('/setSession',(req,res)=>{
// //     req.session.name = "Jennifer"
// //     console.log(req.session);
// //     res.send('Session set successfully')
// // })

// app.get('/setSession', (req, res, next) => {
//     try {
//         // Attempt to set the session
//         req.session.name = "Jennifer";
//         console.log(req.session);
//         res.send('Session set successfully');
//     } catch (err) {
//         // Pass any errors to the error middleware
//         next(err);
//     }
// });


// app.get('/getSession',(req,res)=>{
//     const who = req.query.who;
//     const age = req.query.age;
//     if (req.session && req.session.name) {
//         const user = req.session.name;
//         res.send(`Hello ${user} welcome ${who} ${age}`);
//     } else {
//         res.send('Session variable "name" is not set');
//     }
// })

// app.get('/destroySession',(req,res)=>{
//     req.session.destroy((err)=>{
//         if(err) throw err
//         res.send('logged out')
//     })
// })

// app.set('view engine', 'ejs');
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.locals.title = 'My App'
// app.get('/test',(req,res)=>{
//     res.render('../home.ejs')
// })

// app.get('/us',(req,res)=>{
//      const name = req.query.name;
//      const age = req.query.age;
//      res.send(`Welcome ${name} of ${age}`)
// })
// const path = require('path')
// app.get('/file',(req,res)=>{
//     res.sendFile(path.join(__dirname,"./input.txt"))
// })

// app.get('/user/:id',(req,res)=>{
//     const id = req.params.id;
//     const name = req.query.name;
//     const age = req.query.age;
//     if(id%2===0){
//         res.send(`I am ${name}`)
//     }else{
//         res.send(`i am ${age} old`)
//     }
// })

// app.listen(4000,()=>{
//     console.log('server started')
// })

// const fs = require('fs');
// fs.writeFile('new.txt',`${new Date().toLocaleString('en-IN')}`,(err,data)=>{
//     if(err) throw err;
//     else{
//         console.log(`current date and time: ${new Date().toLocaleString('en-IN')}`);
//     }
// })

// fs.appendFile('new.txt',"Hello Roshan",(err)=>{
//     if(err) throw err;
// })

// fs.readFile('new.txt','utf-8',(err,data)=>{
//     if(err) throw err;
//     else{
//         console.log(data)
//     }
// })

// // fs.unlink('new.txt',(err)=>{
// //     if(err) throw err;
// // })

// //Event Emitter
// const EventEmitter = require('events');
// const Emitter = new EventEmitter();
// Emitter.on('Pizza-Order',(size,topping)=>{
//     console.log(`Your order is a ${size} sized ${topping} topped pizza.`);
// })
// Emitter.emit('Pizza-Order','large','pepperoni');


// //usage of strict mode
// function sum(num1,num2){
//     "use strict";
//     num1 = 200; //override 
//     num2 =300;
//     return arguments[0]+arguments[1];
// }
// console.log(sum(10,10))

// {
//     function show(){
//         console.log('Inside show')
//     }
// }
// show()


// const person = {
//     user:'ROSHAN REJI',
//     email: 'abc@xyz.com',
//     age: 22,
//     address:{
       
//         street: 'Venmony',
//         city :'Chengannur',
//         state: 'Kerala',
//         pinCode: 689509,
//         houseName:'Cheruvallal Padinjattethil'
//     }
// }
// console.table(person)

// try{
// fs.writeFileSync('input.txt','Hello Guys');
// console.log('Data written')
// }catch(err){
// console.log(err)
// }

// console.log(os.totalmem(),os.platform(),os.hostname())


// async function larNum(nums){
//     try{
//     const result = await Math.max(...nums)
//     return result;
//     }catch(err){
//         console.log(err)
//         throw err
//     }
// }
// larNum([1,2,3,4,5,6])
// .then((res)=>{
//     console.log(res,"largest")
// })
// .catch((err)=>{
//     console.log(err)
// })


// function largnum(n){
//     let largest = 0;
//     for(let i=0;i<n.length;i++){
//         if(n[i]>largest){
//             largest = n[i]
//         }
//     }
//     return largest
// }
// console.log(largnum([33,55,100,1002]))

// async function nerd(){
// try{
//     let p = await new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const sum = 1 + 1;
//             if (sum === 3) {
//                 resolve('sum true');
//             } else {
//                 reject('sum fail');

//             }
//         }, 1000);
//     });

//     p.then((result) => {
//         console.log('Result:', result);
//     }).catch((err) => {
//         console.log('Error:', err);
//     });
//     }catch(err){
//         console.log(err)
//     }
// }
// nerd();

// async function strRev(str) {
//     return new Promise((resolve, reject) => {
//         try {
//             let temp = '';
//             for (let i = str.length - 1; i >= 0; i--) {
//                 temp = temp + str[i];
//             }
//             resolve(temp);
//         } catch (err) {
//             reject(err);
//         }
//     });
// }

// strRev('roshan')
//     .then(reversedStr => {
//         console.log(reversedStr);
//     })
//     .catch(error => {
//         console.error(error);
//     });

// // const arr = [1,2,3,4,5];
// // arr.splice(3,2)

// // console.log(arr);
// // console.log(arr.length)

// const {add,subtract,square} = require('./mod');
// console.log(add(3,4))
// console.log(subtract(5,3))
// console.log(square(3))

// app.use((err,req,res,next)=>{
// console.error(err)  
// res.status(500).send('Internal Server Error')
// })

// const colors = {
//     b:'green',b:'blue',c:'red'
// }
// console.table(colors)

// const arr = [1,2,3,4,5];
// arr.splice(3,2)

// console.log(arr);
// console.log(arr.length)

// const players = [
//     {name:'ROSHAN',age:22},
//     {name:'ROSINA',age:19},
//     {name:'ROBBIN',age:18}
// ]
// console.table(players.sort((a,b)=>a.age-b.age))

//find anagram in list

const words = ['listen','silent','enlist','rat','tar','god','dog'];

const anagram = (word) => {
    const letters = word.split('').sort().join('');
    const anagrams = [];
    for (let i = 0; i < words.length; i++) {
        if (letters === words[i].split('').sort().join('')) {
            anagrams.push(words[i]);
        }   
    }
    return anagrams;
}

console.log(anagram('listen'));



//removal of zeros from the array and replace it in the first of the array
let arr = [1,0,20,0,0,3,0,40,0];
let res= []
let nonZero = []

for(let i = 0;i<arr.length;i++){
    if(arr[i]===0){
        res.push(arr[i])
    } else{
        nonZero.push(arr[i])
    }
    if(arr[i]===0){
        arr.splice(i,1);
        arr.unshift(0)
        arr.sort((a,b)=>a-b)
    }
}
console.log(arr)
console.log(res.concat(nonZero))
console.log([...res,...nonZero])

// const ba = [1, 4, 0, 0, 12, 4, 23, 2];
// let result = [];

// for(let i = 0; i < ba.length; i += 2) {
//     let a = ba[i];
//     let b = ba[i + 1] !== undefined ? ba[i + 1] : 0;
//     result.push({ a, b, sum: a + b });
// }

// console.log(result);


// const a = [[3,43],[4,4],[3,3]];
// let cumSum = 100;

// a.forEach(pair =>{
//     const sum = pair[0] + pair[1];
//     cumSum -= sum;
//     console.log(cumSum)
// })

const ba = [{a:[43,34,433,3]},{a:[4,-34,43,3]},{a:[4,34,43,3]},{a:[34,334,43,3]}]

ba.forEach(item=>{
    const sum = item.a.reduce((a,b)=>a+b,0)
    console.log(`Sum of ${item.a}: ${sum}`);
})

const ab = [{af:3},{af:3},{af:3},{af:3},{af:3}]
const totalSum = ab.reduce((a,b)=>a+b.af,0)
console.log(totalSum)

//second smallest 
// const arr = [3,1,4,1,5,9,2,0];
// function secSmall(arr){
//     let first = Infinity, second = Infinity;
//     for(let num of arr){
//         if(num < first){
//             second = first;
//             first = num;
//         }else if(num < second && num !== first){
//             second = num;
//         }
//     }
//     return [first,second]
// }
// console.log(secSmall(arr))

//second largest
// const arr = [3,1,4,1,5,9,2,0];
// function secLarge(arr){
//     let f = -Infinity, s = -Infinity;
//     for(let num of arr){
//         if(num > f){
//             s = f;
//             f = num;
//         } else if(num > s && num !== f){
//             s = num;
//         }
//     }
//     return [f,s]
// }
// console.log(secLarge(arr))

// function palindrome(str){
//     return str === str.split('').reverse().join('')
// }
// console.log(palindrome('madam'))

function pal(str){
    let left = 0, right = str.length-1;
    while(left<right){
        if(str[left]!== str[right]){
            return false;
        }
        left++;
        right--
    }
    return true
}
console.log(pal('racecar'))

let count = 0;
const interval = setInterval(()=>{
    count++;
    console.log(count)
    if(count === 10) clearInterval(interval)
},1000)

// const obj = {a:1,b:2,c:4,d:7,e:6};
// const sum = Object.values(obj).flat().reduce((a,b)=>(b%2===0?a+b:a),0);
// console.log(sum);

// let s = 0;
// for(let key in obj){
//     if(obj[key]%2===0) s += obj[key]
// }
// console.log(s)

const currentDate = new Date().toLocaleDateString();
console.log(currentDate)

const og = [1,2,3,2,4,3,5,5,8,9,9];
const ur = [...new Set(og)]
console.log(ur)

let c = 0
for(let i=0;i<og.length;i++){
    for(let j=i+1;j<og.length;j++){
        if(og[i]===og[j]){
            c++
            break;
        }
    }
}
console.log(c)

function* evenNumbers(){
    let num = 0;
    for(let i=0;i<=10;i++){
        yield num;
        num= num+2;
    }
}
const gen = evenNumbers()
for(let val of gen){
    console.log(val)
}

function counter(){
    let count = 0;
    let intervalId = setInterval(()=>{
        count++
        console.log(count)
        if(count>=10){
            clearInterval(intervalId)
            console.log('counter stopped')
        }
    },1000)
}
counter()

