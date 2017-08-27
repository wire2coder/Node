var mongoose = require('mongoose');
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

var config = require('./config/index.js');
var setupController = require('./controllers/setupController.js');

if ( mongoose.connect(config.connectStrting) ) {
    console.log('Connected to database');
}


app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.json({name1: 'value1'});
});

setupController(app);

app.listen(port, function() {
    console.log(`Express server running on port ${port}`);
});