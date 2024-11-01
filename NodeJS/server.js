//___________________________ express server ____________________
const express = require('express');

//create express app
const app = express();

//set port number
const port = 3000;

//create GET route
app.get('/', (req, res) => {
    res.send('Hello this is a simple express server!');
});

//start server
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
})

//_______________________ http server ________________________
const http = require('http');
const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'})
    res.end('Hello Roshan');
})

server.listen(4002,()=>{
    console.log(`server created: http://localhost:4002`)
})

//_______________________ event emitter ________________________ => emits named events with optional arguments and callback functions
const EventEmitter = require('events');
const emitter = new EventEmitter();
emitter.on('Pizza-Order',(size,topping)=>{
    console.log(`Your order is a ${size} sized ${topping} topped pizza.`);
})
emitter.emit('Pizza-Order','large','pepperoni');



