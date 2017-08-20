// inheriting events' properties
// by using the util library

'use strict';

var events = require('events');
var util = require('util');

// constructor function 
function Greetr() {
    // make sure the Greetr object
    // inherits all the properties of events
    events.call(this)
    this.greeting = 'hi!';
}

util.inherits(Greetr, events);

Greetr.prototype.sayHi = function() {
    console.log(this.greeting);
}

util.inherits(Greetr, events);

var g1 = new Greetr();
g1.sayHi();

g1.on('test1', function() {
    console.log('test1');
})

g1.emit('test1');
