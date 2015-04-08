!(function (angular) {
    'use strict';
    /**
    *
    */
    function MainCtrl ($scope) {
        $scope.greeting = 'hello world!!';
    }
    MainCtrl.$inject = ['$scope'];
    /**
    *
    */
    angular.module('main.controllers', [])
        .controller('MainCtrl', MainCtrl);
})(angular);
