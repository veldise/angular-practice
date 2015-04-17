(function (angular) {
    'use strict';
    /**
    *
    */
    function Todos () {
    }
    Todos.$inject = [];
    /**
    *
    */
    angular.module('todo.services', [])
        .service('Todos', Todos);
})(angular);
