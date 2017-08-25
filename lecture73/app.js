var express = require('express');

// ??? express is a constructor function
// run the function to get new express object
// make a pointer 'app' and point it
// to the object.
var app = express();

var port = process.env.port || 3000;

// use express to handle routing
// for the server

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
})

app.get('/json', function(req, res) {
    res.json({name1: 'value1', name2: 'value2'})
})

app.get('/info/:id1', function(req, res) {
    // :id variable is added to the 
    // req.params object as property
    res.send(`<html><head></head><body><h4>${req.params.id1}</h4></body></html>`)
})

app.listen(port, function() {
    console.log(`Express server running on port ${port}`)
})