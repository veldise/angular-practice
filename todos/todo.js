!(function(angular, _) {
    'use strict';
    /**
     *
     */
    function TodoCtrl($scope) {
        $scope.todos = [];
        $scope.markAll = false;

        $scope.addTodo = function(event) {
            if (event.keyCode == 13 && $scope.todoText) {
                $scope.todos.push({
                    text: $scope.todoText,
                    done: false
                });
                $scope.todoText = '';
            }
        };
        $scope.isTodo = function() {
            return $scope.todos.length > 0;
        };

        $scope.toggleEditMode = function(event) {
            angular.element(event.target)
                .closest('li')
                .toggleClass('editing');
        };
        $scope.editOnEnter = function(event, todo) {
            if (event.keyCode == 13 && todo.text) {
                $scope.toggleEditMode(event);
            }
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

        $scope.hasDone = function() {
            return ($scope.todos.length !== $scope.remaining());
        };

        $scope.itemText = function() {
            return ($scope.todos.length - $scope.remaining() > 1) ? 'items' : 'item';
        };

        $scope.toggleMarkAll = function() {
            angular.forEach($scope.todos, function(todo) {
                todo.done = $scope.markAll;
            });
        };

        $scope.clear = function() {
            var oldTodos = $scope.todos;
            // $scope.todos = [];

            // angular.forEach(oldTodos, function(todo) {
            //     if (!todo.done) {
            //         $scope.todos.push(todo);
            //     }
            // });
            $scope.todos = _.filter(oldTodos, { done: false });
        };
    }
    /**
     *
     */
    angular.module('todoApp', [])
        .controller('TodoCtrl', TodoCtrl);
})(angular, _);
