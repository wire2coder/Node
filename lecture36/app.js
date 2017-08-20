var EventEmitter = require('events');
var util = require('util');

// constructor
function Greetr() {
    this.greeting = 'Hlljdkdkdk';
}

// Greetr will get all the properties of 
// Node's event
util.inherits(Greetr, EventEmitter);

Greetr.prototype.sayHi = function() {
    console.log('inside prototype')
    this.emit('greet');
}

object1 = new Greetr();

// what does .emit do ?
// emit sends message to 
// 'everybody that is listening


// what does .on do?
// .on does something when it received
// message from emit
object1.on('greet', function() {
    console.log('.onnnnnnnnnnnnnn');
});

object1.sayHi();
