var http = require('http');
var fs = require('fs');

var port = 2000;

let data1 = {
    name1: 'value1',
    name2: 'value2',
    name3: 'value3'
};

var server1 = http.createServer( function(req, res) {
    // request object
    // look at the request URL


    // if the Request URL is root, return index.html
    if ( req.url === '/' ) {
        fs.createReadStream(__dirname + '/index.html').pipe(res);

    } else if ( req.url === '/json') {
        res.writeHead( 200, {'Content-Type': 'application/json' } );

        // return JSON strings
        res.end( JSON.stringify(data1) );

    } else {
        res.writeHead(404, 'Page not found');
        res.end();
    }

});

server1.listen(port, '127.0.0.1', 2, function() {
    console.log(`Server running at port: ${port} `);
})
