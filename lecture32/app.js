// object property
var obj = {
    greet: "ljksdfldjf"
}

console.log(obj.greet);
console.log(obj['greet'])

var p1 = 'greet'
// console.log(obj['greet'])
console.log(obj[p1])


// arrays

var array1 = [];

array1.push(
    function() {
        console.log('push 1')        
    }
)
array1.push(
    function() {
        console.log('push 2')        
    }
)
array1.push(
    function() {
        console.log('push 3')        
    }
)