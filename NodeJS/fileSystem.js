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

//_________append file synchronously________
fs.appendFileSync('input.txt','Tinsu');
console.log('File appended synchronously');

//_________append file asynchronously________
fs.appendFile('input.txt','Roshan',(err)=>{
    if(err) throw err;
    console.log('File appended asynchronously');
})

//________readable and writable streams________
const fs = require('fs');
const readableStream = fs.createReadStream('input.txt');
const writableStream = fs.createWriteStream('output.txt');
// Pipe the readable stream to the writable stream
readableStream.pipe(writableStream);
//or 
readableStream.on('data',(chunk)=>{
    writableStream.write(chunk);
})
readableStream.on('end',()=>{
    writableStream.end();
})

//write current date and time in a file
const date = new Date().toLocaleString('en-IN');
fs.writeFile('date.txt', date, (err) => {
    if (err) throw err;
    console.log('Date and time written to file successfully.');
});

//just another add on

const fs = require('fs');

const p = new Promise((res, rej) => {
    setTimeout(() => {
        let skills = ['HTML', 'REACT', 'CSS', 'MONGO', 'NODE'];
        if (skills.includes('NODE')) {
            res('Full Stack Developer');
        } else {
            rej('Skill not found');
        }
    }, 3000);
});

p.then((dev) => {
    console.log(dev); // Log the resolved value to the console
    // Write to a file when resolved
    fs.writeFile('developer.txt', dev, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
        } else {
            console.log('Content written to developer.txt');
        }
    });
})
.catch((err) => {
    // Log the error when rejected
    console.error('Promise rejected:', err);
});


