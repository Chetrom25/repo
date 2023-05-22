const http = require("http");
const port = 8000;

const requestListener = (req, res) => {
    console.log(req);
    res.writeHead(200);
    res.end("My first server!");
};

const server = http.createServer(requestListener);
server.listen(port, () => {
    let addr = server.address()
    console.log(`Server is running on port ${port} addr ${addr.address}`);
});
