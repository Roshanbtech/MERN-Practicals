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

//_______create directory synchronously______
fs.mkdirSync('stuff');
console.log('Directory created synchronously');

//_______create directory asynchronously______
fs.mkdir('stuff',(err)=>{
    if(err) throw err;
    console.log('Directory created asynchronously');
})

//________ status of file system_______
fs.stat('input.txt',(err,stats)=>[
    console.log(stats.size)
])

// _________rename file synchronously_______
fs.renameSync('input.txt','output.txt');
console.log('File renamed synchronously');

// _________rename file asynchronously_______
fs.rename('input.txt','output.txt',(err)=>{
    if(err) throw err;
    console.log('File renamed asynchronously');
})

// _______link file synchronously________
fs.linkSync('output.txt','input.txt');

// _______link file asynchronously________
fs.link('output.txt','input.txt',(err)=>{
    if(err) throw err;
    console.log('File linked asynchronously');
})