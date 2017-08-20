// using Node events library
var Emitter = require('events');

var eventConfig = require('./config.js');

var emit1 = new Emitter();

emit1.on(eventConfig.events.GREET, function() {
    console.log('Greeting from a ')
})

emit1.on(eventConfig.events.GREET, function() {
    console.log('give me a dddd')
})

// emit1.events.prop1[0]();
emit1.emit(eventConfig.events.GREET);

