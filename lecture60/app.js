// get the http library
var http = require('http');
// get the file system library
var fs = require('fs');


var port = 2000;

var server1 = http.createServer(function(req, res) {
    // response object
    // write stuff to the head of the response
    // and the status code
    res.writeHead(200, { 'Content-type': 'text/html' });

    fs.createReadStream(__dirname +'/index.html').pipe(res);
    // you are writting data into a 'write able' data stream, the 'res'

})

server1.listen(port, '127.0.0.1');
console.log(`Server running at localhost at port ${port}`);


