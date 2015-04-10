!(function (angular) {
    'use strict';
    /**
    *
    */
    function MainCtrl($scope) {
        $scope.name = '';

        $scope.$watch('name', function (newName, oldName, scope) {
            scope.newName = newName;
            scope.oldName = oldName;
        });
    }
    MainCtrl.$inject = ['$scope'];
    /**
    *
    */
    angular.module('mainApp', [])
        .controller('MainCtrl', MainCtrl);
})(angular);
