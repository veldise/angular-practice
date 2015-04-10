!(function (angular) {
    'use strict';
    /**
    *
    */
    function MainCtrl($scope) {
        $scope.timeOfDay = 'morning';

        $scope.info = {};
        $scope.info.name = 'Mattie';
    }
    MainCtrl.$inject = ['$scope'];


    function Child1Ctrl($scope) {
        // nothing
    }
    Child1Ctrl.$inject = ['$scope'];

    function Child2Ctrl($scope) {
        $scope.timeOfDay = 'evening';

        $scope.info.name = 'Nikki';
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
