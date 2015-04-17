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
            '<li>',
                '<div class="view">',
                    '<input type="checkbox"/>',
                    '<span class="done-"></span>',
                    '<button type="button">delete</button>',
                '</div>',
                '<input class="edit" type="text"/>',
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
