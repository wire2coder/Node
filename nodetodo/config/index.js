var mongoose = require('mongoose');

config1 = {
    username: 'usertest',
    password: 'test123'
};

var connectStrting = `mongodb://${config1.username}:${config1.password}@ds161443.mlab.com:61443/nodetodo`;

var Schema = mongoose.Schema;

var todoSchema = new Schema({
    username: String,
    todo: String,
    isDone: Boolean,
    hasAttachment: Boolean
});

var Todos = mongoose.model('Todos', todoSchema);

module.exports = {
    connectStrting: connectStrting,
    Todos: Todos
}