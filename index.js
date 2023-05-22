const http = require("http");
const port = 8000;

const requestListener = (req, res) => {
    console.log(req);
    let addr = req.socket.remoteAddress
    res.writeHead(200);
    console.log(`addr = ${addr}`)
    res.end(`My first server! ${addr}`);
};

const server = http.createServer(requestListener);
server.listen(port, () => {
    console.log(`Server is running on port ${port} `);
});
