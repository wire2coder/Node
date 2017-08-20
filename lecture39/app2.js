var util = require('util')
var events = require('events')

// function constructor
function Person() {

    events.apply(this);

    this.firstname = 'Youssef';
    this.lastname = 'Kouch';
}

// prototype function expression
Person.prototype.greet = function() {
    console.log(`Hello ${this.firstname} ${this.lastname} `)
}

// function constructor
function Policeman() {
    this.badgeNumber = '39749374';
}

util.inherits(Policeman, Person);

// make a new police object
var police1 = new Policeman();

police1.greet();