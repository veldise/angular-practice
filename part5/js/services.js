(function (angular) {
    'use strict';
    /**
    *
    */
    function Todos ($http, $log) {
        /**
        *   private
        */
        var _todos = [];

        this.get = function () {
            return _todos;
        };
        this.set = function (todos) {
            _todos = todos;
        };
        /**
        *
        */
        var _domain = 'http://192.168.0.165:3000';
        var _resUrl = _domain + '/todos/yourKey';
        var errorHandler = function (reason) {
            $log.error(reason);
            // alert(reason);
        };

        this.create = function (todo) {
            $http.post(_resUrl, todo)
                .success(function (data) {
                    _todos.push(data);
                })
                .error(errorHandler);
        };
        this.read = function () {
            $http.get(_resUrl)
                .success(function (data) {
                    // todos.flush();
                    _todos.splice(0, _todos.length);

                    for (var i = 0, l = data.length; i < l; i++) {
                        _todos.push(data[i]);
                    }
                })
                .error(errorHandler);
        };
        this.update = function (todo) {
            $http.put(_resUrl + '/' + todo.id, todo)
                .success(function (data) {
                    var index = _todos.indexOf(todo);

                    // extend
                    _todos[index].done = data.done;
                    _todos[index].text = data.text;
                })
                .error(errorHandler);
        };
        this.remove = function (todo) {
            $http.delete(_resUrl + '/' + todo.id)
                .success(function () {
                    var index = _todos.indexOf(todo);
                    _todos.splice(index, 1); // remove
                })
                .error(errorHandler);
        };
    }
    Todos.$inject = ['$http', '$log'];
    /**
    *
    */
    angular.module('todo.services', [])
        .service('Todos', Todos);
})(angular);
