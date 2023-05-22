const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 8000;

// Middleware function to log remote IP addresses and time
const logRemoteIP = (req, res, next) => {
    const remoteIP = req.ip;
    const timestamp = new Date().toISOString();
    const log = `Time: ${timestamp} | Remote IP: ${remoteIP}\n`;
    fs.appendFile('public/remote.txt', log, (err) => {
        if (err) console.error(err);
    });
    next();
};

app.use(logRemoteIP);

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route for page1
app.get('/page1', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'page1.html'));
});

// Route for page2
app.get('/page2', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'page2.html'));
});

// Route for page3
app.get('/page3', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'page3.html'));
});

// Route for page4
app.get('/page4', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'page4.html'));
});

app.get('/remote-ip', (req, res) => {
    const remoteIp = req.ip; // Get the remote IP address from the request object
    res.send(remoteIp);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});