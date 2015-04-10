!(function (angular) {
    'use strict';
    /**
    *
    */
    function MainCtrl($scope) {
        $scope.name = 'Foo';

        $scope.$on('set name', function (e, name, num) {
            $scope.name = name;
            $scope.num = num;
        });

        $scope.emitName = function () {
            $scope.$broadcast('set name', 'Foo', 10);
        };
    }
    MainCtrl.$inject = ['$scope'];


    function Child1Ctrl($scope) {
        $scope.name = 'Bar';

        $scope.$on('set name', function (e, name, num) {
            $scope.name = name;
            $scope.num = num;
        });

        $scope.emitName = function () {
            $scope.$emit('set name', 'Bar', 30);
        };
    }
    Child1Ctrl.$inject = ['$scope'];

    function Child2Ctrl($scope) {
        $scope.name = 'Baz';

        $scope.$on('set name', function (e, name, num) {
            $scope.name = name;
            $scope.num = num;
        });

        $scope.emitName = function () {
            $scope.$root.$broadcast('set name', 'Baz', 50);
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















