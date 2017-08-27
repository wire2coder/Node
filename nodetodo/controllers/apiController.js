// write CRUD API in here
// data are coming from a FORM/POST

var bodyParser = require('body-parser');
var Todos  = require('../config/index.js').Todos;

module.exports = function(app) {

    // for all URL request do
    app.use( bodyParser.json() );
    app.use( bodyParser.urlencoded( {extended: true}) );
    

    app.get('/api/getAll', function(req, res) {
        Todos.find({}, function(err, results) {
            if (err) { throw errs; }

            res.send(results);
        });
    })

    // handle get request, at URL /api/todos/:uname
    app.get('/api/todos/:uname', function(req, res) {
        Todos.find({username: req.params.uname}, function(err, results) {
            // send Response object back to the web-browser
            if (err) { throw err }
            res.send(results);
        })
    });

    // look for user by ID
    app.get('/api/todo/:id', function(req, res) {
        // where is the Model object? Todos
        Todos.findById({_id: req.params.id}, function(err, result) {
            if (err) { throw err }
            res.send(result);
        });
    });

    app.post('/api/todo', function(req, res) {

        if (req.body.id) {
            
            Todos.findByIdAndUpdate(req.body.id, 
                
                { todo: req.body.todo, isDone: req.body.isDone, hasAttachment: req.body.hasAttachment }
                , function(err, todo) {
                  if (err) throw err;
                  
                  res.send('Success');
              });

        } else {
             // create new
            var newTodo = Todos({
                username: 'test',
                todo: req.body.todo,
                isDone: req.body.isDone,
                hasAttachment: req.body.hasAttachment
            });

            newTodo.save( function(err) {
                if (err) { throw err; }
                res.send('created');
            }); 
        }

           
 
    });

    // delete a data object/record
    app.delete('/api/todo', function(req, res) {
        Todos.findByIdAndRemove(req.body.id, function(err) {
            if (err) { 
                throw err;
            }

            res.send('deleted');
        })
    });

} // module.exports

