const http = require('http');

const server = http.createServer((request, response) => {
    response.end('Hello Bruv !');
});

server.listen(process.env.PORT || 3000);