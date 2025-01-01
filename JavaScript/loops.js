//for loop : used to iterate over a block of code a specific number of times
for(let i=0;i<10;i++){
    console.log(i);
}

//while loop : used to iterate over a block of code as long as a condition is true
let i=0;
while(i<10){
    console.log(i);
    i++;
}

//do while loop : used to iterate over a block of code as long as a condition is true and executes atleast once
let j=0;
do{
    console.log(j);
    j++;
}while(j<10);

//break : used to exit a loop early
for(let i=0;i<10;i++){
    if(i===5){
        break;
    }
    console.log(i);
}

//continue : used to skip the current iteration of a loop and continue to the next iteration
for(let i=0;i<10;i++){
    if(i===5){
        continue;
    }
    console.log(i);
}

//for in loop : used to iterate over the properties of an object
let obj = {a:1,b:2,c:3};
for(let key in obj){
    console.log(key);
}

//for of loop : used to iterate over the values of an object
let arr = [1,2,3];
for(let val of arr){
    console.log(val);
}

//for each loop : used to iterate over the values of an object
arr.forEach((val)=>{
    console.log(val);
})

//map: used to create a new array by applying a function to each element of an existing array
let arr = [1,2,3];
let newArr = arr.map((val)=>{
    return val*2;
})
console.log(newArr);

