// this file is the same as app2.js
// but we are using ECMAscript 2015 class syntax

var util = require('util');
var events = require('events');


// attaching the class to module.exports object
module.exports = class Greetr extends events {

    constructor() {
        // util.inherits(Greetr, events)
        super() ;

        this.greeting1 = "greeting 1"
    }

    sayHi() {
        console.log(`Jim ${this.greeting1} `)
        this.emit('greeted');
    }
    
} // class Person