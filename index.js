const http = require("http");
const host = 'localhost';
const port = 8000;

const requestListener = (req, res) => {
    res.writeHead(500);
    res.end("My first222222222222 server!");
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
