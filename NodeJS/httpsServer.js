//__________________________ HTTP SERVER ____________________________________________________
//HTTP stands for HyperText Transfer Protocol. It is a protocol that is used to transfer data over the internet.

const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Hello Roshan');    
});
server.listen(4002, () => {
    console.log('Server started at http://localhost:4002');
})