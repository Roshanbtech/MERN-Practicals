//_______ file system_______ => is a built-in module in Node.js that provides a way to interact with the file system, such as reading, writing, and deleting files, as well as creating and removing directories.

//________________read file synchronously_____ 
const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf-8');
console.log(data,'synchronously');

//________________read file asynchronously______
fs.readFile('input.txt','utf-8',(err,data)=>{
    if(err) throw err;
    console.log(data,'asynchronously');
})

//_______write file synchronously______
fs.writeFileSync('output.txt', 'Hello World!');
console.log('File written synchronously');

//_______write file asynchronously______
fs.writeFile('output.txt','TinsuRoshan',(err,data)=>{
    if(err) throw err;
    console.log('File written asynchronously');
})

//_______delete file synchronously______
fs.unlinkSync('output.txt');
console.log('File deleted synchronously');

//_______delete file asynchronously______
fs.unlink('output.txt',(err)=>{
    if(err) throw err;
    console.log('File deleted asynchronously');
})
