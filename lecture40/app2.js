// doing the samething with app.js
// but with regular Javascript syntax

'use strict';

var util = require('util');
var events = require('events');

// function 'constructor'
// remember function is 'object'
function Person(firstname, lastname) {
    this.firstname = firstname || 'default first';
    this.lastname = lastname || 'default last';
}

// methods to be shared with all objects.
Person.prototype.greet = function() {
    console.log(` Mamo ${this.firstname} ${this.lastname} `)
}

var person1 = new Person();
person1.greet();

var person2 = new Person('Smith', 'Wesfield');
person2.greet();
