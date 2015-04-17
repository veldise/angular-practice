(function (angular) {
    'use strict';
    /**
    *
    */
    function onEnter () {
        return function (scope, element, attrs) {
            // element.bind('keydown keypress', function (event) {
            element.bind('keyup', function (event) {
                if (event.which === 13) {
                    scope.$apply(function () {
                        scope.$eval(attrs.onEnter);
                    });

                    event.preventDefault();
                }
            });
        };
    }
    /**
    *
    */
    function todoItem (Todos) {
        var template = [
            '<li ng-dblclick="toggleEditMode()">',
                '<div class="view" ng-keyup="editTodo($event)">',
                    '<input type="checkbox" ng-model="todo.done"/>',
                    '<span class="done-{{todo.done}}" >{{todo.text}}</span>',
                    '<button type="button" ng-click="remove(todo)">del</button>',
                '</div>',
                '<input class="edit" type="text" ng-model="todo.text"',
                'on-enter="editOnEnter(todo)"/>',
            '</li>'
        ].join('\n');

        var link = function (scope, element) {
        };

        return {
        };
    }
    todoItem.$inject = ['Todos'];
    /**
    *
    */
    angular.module('todo.directives', [])
        .directive('onEnter', onEnter)
        .directive('todoItem', todoItem);
})(angular);
