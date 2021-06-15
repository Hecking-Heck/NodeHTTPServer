// Created by Heck to demonstrate how a HTTP Server works.
// Feel free to remove this comment :)

console.log("A NodeJS Server using the Express Middleware! \nServer Version: 1.0.0");

// General
const path = require('path');

// Express Server
const express = require('express');
const app = express();
 
// GET method route
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
    res.status(200);
})

// POST method route
app.post('/', function (req, res) {
    // This is where a user would send information to a server and where you would handle it,
    // look into this deeper via the 'ExpressJS' Documentation.
})
 
app.listen(3000)