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
            '<li ng-dblclick="toggleEditMode()" ng-class="{ editing: isEditing }">',
                '<div class="view">',
                    '<input type="checkbox" ng-model="todo.done"/>',
                    '<span class="done-{{todo.done}}" >{{todo.text}}</span>',
                    '<button type="button" ng-click="remove(todo)">delete</button>',
                '</div>',
                '<input class="edit" type="text" ng-model="todo.text"',
                    'on-enter="update(todo)"/>',
            '</li>'
        ].join('\n');

        var link = function (scope, element) {
            /**
            *
            */
            scope.toggleEditMode = function() {
                scope.isEditing = !scope.isEditing;
            };
            scope.update = function(todo) {
                if (todo.text) {
                    scope.toggleEditMode();
                    Todos.update(todo);
                }
            };
            scope.remove = function (todo) {
                Todos.remove(todo);
            };
        };

        return {
            restrict: 'E',
            template: template,
            replace: true,
            scope: {
                todo: '=model'
            },
            link: link
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
