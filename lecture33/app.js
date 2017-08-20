var Emitter = require('./emitter.js')

var emit1 = new Emitter();

emit1.on('greet', function() {
    console.log('Greeting from a ')
})

emit1.on('greet', function() {
    console.log('give me a good')
})

// emit1.events.prop1[0]();
emit1.emit('greet');