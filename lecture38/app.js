// object literal
var object1 = {
    name: ';lskdjf',
    greet: function() {
        console.log(`Hi ${this.name}`)
    }
}

object1.greet();

// invoke the method with call()
object1.greet.call({name: 'aaaaa'})

object1.greet.apply({name: 'iiiiii'})