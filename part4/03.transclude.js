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
    function myDirective () {
        return {
            restrict: 'E',
            template: [
                '<div>',
                    '<h3>Hello AngularJS!!</h3>',
                    '<div ng-transclude></div>',
                '</div>'
            ].join(''),
            transclude: true
        };
    }
    /**
     *
     */
    angular.module('mainApp', [])
        .directive('myDirective', myDirective)
        .controller('MainCtrl', MainCtrl);
})(angular);

