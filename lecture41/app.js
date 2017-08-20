'use strict';

var Greetr = require('./greetr.js');

// make a new Greetr object
var g1 = new Greetr();

g1.on('greeted', function() {
    console.log(`You got greeted`);
});

g1.sayHi();


