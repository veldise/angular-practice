(function (angular) {
    'use strict';
    /**
     *
     */
    function MainCtrl($scope) {
        // ...
    }
    MainCtrl.$inject = ['$scope'];
    /**
     *
     */
    function myDirective ($log) {
        return {
            restrict: 'EA',
            template: '<h3>Hello, AngularJS!!</h3>',
            link: function (scope, element, attrs) {
                $log.debug(attrs.myDirective);
            }
        };
    }
    myDirective.$inject = ['$log'];
    /**
     *
     */
    angular.module('mainApp', [])
        .directive('myDirective', myDirective)
        .controller('MainCtrl', MainCtrl);
})(angular);

