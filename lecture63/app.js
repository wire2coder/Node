var http = require('http');
var fs = require('fs');

var port = 2000;

var server1 = http.createServer(function (req, res) {
    // response object, call a method
    // write to the head
    res.writeHead(200, {'Content-Type': 'application/json'});

    var data1 = {
        name1: 'value1',
        name2: 'value2'
    };

    // convert object stuff into strings
    var string1 = JSON.stringify(data1);

    // use pipe whenever you can

    // end response stream
    res.end(string1);
    
});

server1.listen(port, '127.0.0.1');
console.log(`Server running at localhost at port ${port}`);
