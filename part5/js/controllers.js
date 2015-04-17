(function (angular, _) {
    'use strict';
    /**
    *
    */
    function TodoCtrl ($scope, Todos) {
        // init
        Todos.read();

        /**
        *   variables
        */
        $scope.todos = Todos.get(); // link ref
        $scope.todoText = '';
        $scope.markAll = false;

        $scope.addTodo = function (text) {
            if (text) {
                Todos.create({
                    text: text,
                    done: false
                });
                $scope.todoText = '';
            }
        };

        $scope.isTodo = function() {
            return $scope.todos.length > 0;
        };
        $scope.toggleMarkAll = function() {
            angular.forEach($scope.todos, function(todo) {
                todo.done = $scope.markAll;
            });
        };

        $scope.remaining = function() {
            // var count = 0;
            // angular.forEach($scope.todos, function(todo) {
            //     count += (todo.done) ? 0 : 1;
            // });
            // return count;
            return _.sum($scope.todos, function(todo) {
                return (todo.done) ? 0 : 1;
            });
        };
        $scope.hasDone = function () {
            return ($scope.todos.length !== $scope.remaining());
        };
        $scope.clear = function () {
            angular.forEach($scope.todos, function (todo) {
                if (todo.done) {
                    Todos.remove(todo);
                }
            });
        };
    }
    TodoCtrl.$inject = ['$scope', 'Todos'];
    /**
    *
    */
    angular.module('todo.controllers', [])
        .controller('TodoCtrl', TodoCtrl);
})(angular, _);
