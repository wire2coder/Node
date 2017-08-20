var util = require('util')
var events = require('events')

// function constructor
function Person() {

    this.firstname = 'Ulroda';
    this.lastname = 'Kouch';
}

// prototype function expression
Person.prototype.greet = function() {
    console.log(`Hello ${this.firstname} ${this.lastname} `)
}

// function constructor
function Policeman() {
    // empty object create and 'this' 'points' to it
    // pass the empty object into Person constructor
    Person.apply(this);
    this.badgeNumber = '39749374';
}

util.inherits(Policeman, Person);

// make a new police object
var police1 = new Policeman();

police1.greet();