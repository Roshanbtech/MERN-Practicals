//import express module
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

