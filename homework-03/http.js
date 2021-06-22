const http = require('http');

const server=http.createServer( (req,res)=> {
   res.writeHead(200, { 'Content-Type': 'text/plain' });
   res.write('Creating an HTTP server');
   res.end();
});

//http://localhost:8080/
server.listen(8080);
console.log('Node.js Web server is running on port 8080');

