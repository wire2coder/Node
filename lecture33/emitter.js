// Event 'emitter' and 'listener'

// function constructor
function Emitter() {
    this.events = {};

    /* this.events = {        
        type = [ function(), function(), function()]
    }
    */
}

Emitter.prototype.on = function(type, listener) {
    // you can refer to a proper in an object with 
    // events[prop1] = [ function, function]
    this.events[type] = this.events[type] || [];
    // listener is a function
    this.events[type].push(listener);
}

Emitter.prototype.emit = function(type) {
    // check if the property exists on the object
    if (this.events[type]) {
        // events[type] = [ function, function ]
        this.events[type].forEach(function(listener) {
            listener()
        });
    }
}

// make this a module
module.exports = Emitter;