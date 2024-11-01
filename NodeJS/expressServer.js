//___________________________ express server ____________________
const express = require('express');
const session = require('express-session');

// Create express app
const app = express();

// Set port number
const port = 3000;

// Use express-session middleware
app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000, secure: false, httpOnly: true }
}));

// Middleware to log parameters
const logParams = (req, res, next) => {
    const queryParams = req.query; // Query parameters from the URL
    const bodyParams = req.body;    // Body parameters from POST requests
    const routeParams = req.params;  // Route parameters from the URL path

    // Log the parameters
    console.log('Query Parameters:', queryParams);
    console.log('Body Parameters:', bodyParams); // Log body parameters
    
    // Log route parameters if they exist
    if (Object.keys(routeParams).length > 0) {
        console.log('Route Parameters:', routeParams); // Log all route parameters
    }

    next(); // Call the next middleware or route handler
};

// Middleware to parse JSON bodies
app.use(express.json()); 
app.use(logParams); // Apply the logging middleware

// Create GET route to set session variable
app.get('/', (req, res) => {
    req.session.userName = 'Roshan';
    res.send('Hello ' + req.session.userName);
});

// Route to subtract two numbers from query parameters
app.get('/subtract', (req, res) => {
    const { a, b } = req.query;
    const num1 = parseInt(a); // Convert to integer
    const num2 = parseInt(b); // Convert to integer

    if (!isNaN(num1) && !isNaN(num2)) {
        const result = num1 - num2;
        res.json({ result });
    } else {
        return res.status(400).json({ error: 'Both a and b should be valid numbers' });
    }
});

// Route to return a route parameter
app.get('/subtract/:id', (req, res) => {
    const { id } = req.params;
    console.log('Route Parameter id:', id);
    res.json({ id });
});

// Route to add two numbers from query parameters
app.get('/add', (req, res) => {
    const num1 = parseFloat(req.query.num1); // Get the first number
    const num2 = parseFloat(req.query.num2); // Get the second number

    if (!isNaN(num1) && !isNaN(num2)) {
        const sum = num1 + num2; // Calculate the sum
        res.send(`The sum of ${num1} and ${num2} is ${sum}`);
    } else {
        res.send('Please provide valid numbers as query parameters.');
    }
});

// Route to demonstrate conditional responses based on user and parameters
app.get('/:user', (req, res) => {
    const user = req.params.user;
    const username = req.query.username;
    const userage = req.query.userage;

    if (user % 2 === 0) {
        res.send(`I'm ${username}`);
    } else {
        res.send(`I'm ${userage} years old`);
    }
});

// Route to handle logout
app.get('/logout', (req, res) => {
    req.session.destroy();
    res.send('Logged out');
});

// Start server
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
