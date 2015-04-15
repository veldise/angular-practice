(function (angular) {
    'use strict';
    /**
     *
     */
    function MainCtrl($scope) {
        $scope.clicked = function (name) {
            alert('name: ' + name);
        };
    }
    MainCtrl.$inject = ['$scope'];
    /**
     *
     */
    function myDirective ($log) {
        return {
            restrict: 'E',
            template: [
                '<div ng-click="clickExp({ name: name })">',
                    '<h2>name: {{name}}</h2>',
                    '<h2>data: {{data}}</h2>',
                '</div>'
            ].join(''),
            scope: {
                name: '@title',
                data: '=model',
                clickExp: '&clickArea'
            },
            link: function (scope, element, attrs) {
                $log.debug(scope);
                $log.debug(attrs);
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

