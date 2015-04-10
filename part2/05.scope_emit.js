!(function (angular) {
    'use strict';
    /**
    *
    */
    function MainCtrl($scope) {
        $scope.name = 'Foo';

        $scope.$on('set name', function (e, name) {
            $scope.name = name;
        });

        $scope.emitName = function () {
            $scope.$broadcast('set name', 'Foo');
        };
    }
    MainCtrl.$inject = ['$scope'];


    function Child1Ctrl($scope) {
        $scope.name = 'Bar';

        $scope.$on('set name', function (e, name) {
            $scope.name = name;
        });

        $scope.emitName = function () {
            $scope.$emit('set name', 'Bar');
        };
    }
    Child1Ctrl.$inject = ['$scope'];

    function Child2Ctrl($scope) {
        $scope.name = 'Baz';

        $scope.$on('set name', function (e, name) {
            $scope.name = name;
        });

        $scope.emitName = function () {
            $scope.$root.$broadcast('set name', 'Baz');
        };
    }
    Child2Ctrl.$inject = ['$scope'];
    /**
    *
    */
    angular.module('mainApp', [])
        .controller('MainCtrl', MainCtrl)
        .controller('Child1Ctrl', Child1Ctrl)
        .controller('Child2Ctrl', Child2Ctrl);
})(angular);
