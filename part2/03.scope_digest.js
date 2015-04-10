!(function (angular) {
    'use strict';
    /**
    *
    */
    function MainCtrl($scope, $element) {
        console.log($element);
        $element.find('#btnFoo').click(function (e) {
            $scope.name = 'Foo';
        });
        $element.find('#btnBar').click(function (e) {
            $scope.name = 'Bar';
            $scope.$digest();
        });
    }
    MainCtrl.$inject = ['$scope', '$element'];
    /**
    *
    */
    angular.module('mainApp', [])
        .controller('MainCtrl', MainCtrl);
})(angular);
