// add data to database

var config = require('../config/index.js');

module.exports = function(app) {

    app.get('/api/setupData', function (req, res) {

        // add data to database
        var starterData = [
            {
                username: 'user1',
                todo: 'task 1',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'user2',
                todo: 'task2',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'user3',
                todo: 'task3',
                isDone: false,
                hasAttachment: false
            }
        ]

        config.Todos.create(starterData, function(err, results) {
            if (err) {
                console.log(err)
            } else {
                res.json(results);
            }
        })

    })

}