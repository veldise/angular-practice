'use strict';
/**
*
*/
var _ = require('lodash');

var dicTodos = {};

exports.read = function (req, res) {
    var todos = getTodos(req.params.name);

    res.send(_.values(_.omit(todos, 'count')));
};
exports.create = function (req, res) {
    var todos = getTodos(req.params.name);
    var todo = req.body;

    todo.id = todos.count + '';
    todos[todo.id] = todo;

    todos.count++;

    res.send(todo);
};
exports.update = function (req, res) {
    var todos = getTodos(req.params.name);
    var id = req.params.id;
    var todo = req.body;

    todos[id] = _.extend(todos[id], todo);

    res.send(todos[id]);
};
exports.remove = function (req, res) {
    console.log(req.params);
    var todos = getTodos(req.params.name);
    var id = req.params.id;

    // todos[id] = null;
    delete todos[id];

    res.send(id);
};
exports.removeAll = function (req, res) {
    dicTodos = {};

    res.send('ok');
};

////////////////////////////// func //////////////////////////////

function getTodos (name) {
    if (!dicTodos[name]) {
        dicTodos[name] = {
            count: 1
        };
    }
    return dicTodos[name];
}
