const http = require('http');

const hostname = '127.0.0.1';
const port = 8088;

const server = http.createServer((req,res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type','text/html');
	res.end('<h1>Hello World</h1>\n');
});

server.listen(port, hostname, () => {
	console.log(`Server Runing at http:
});
