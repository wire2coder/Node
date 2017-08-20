'use strict';

var util = require('util');
var events = require('events');

// using ECMA 2015 to create a 'Class'
class Person {

    // constructor
    // you can set default value at the function arguments
    constructor(firstname = 'defaultF', lastname = 'defaultL') {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    // all objectName.prototype.methodName
    // will not the keyword function infront
    greet() {
        console.log(` Yo ${this.firstname} ${this.lastname} `);
    }

} // 'class' Person

var person1 = new Person();
person1.greet();

var person2 = new Person('Sam', 'Worku');
person2.greet();