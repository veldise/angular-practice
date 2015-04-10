!(function (angular) {
    'use strict';
    /**
    *
    */
    function MainCtrl($scope) {
        $scope.evalText = function (expr) {
            $scope.$eval(expr);
            console.log($scope);
        };
    }
    MainCtrl.$inject = ['$scope'];
    /**
    *
    */
    angular.module('mainApp', [])
        .controller('MainCtrl', MainCtrl);
})(angular);
