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
            // template: '<h3>Hello, AngularJS!!</h3>',
            templateUrl: '/views/directive_example.html',
            replace: true,
            link: function (scope, element, attrs) {
                $log.debug(attrs.myDirective);
            }
        };
    }
    myDirective.$inject = ['$log'];
    /**
    *
    */
    function appRun ($templateCache) {
        $templateCache.put('/views/directive_example.html', '<h3>Hello, AngularJS!!</h3>');
    }
    appRun.$inject = ['$templateCache'];
    /**
     *
     */
    angular.module('mainApp', [])
        .directive('myDirective', myDirective)
        .controller('MainCtrl', MainCtrl)
        .run(appRun);
})(angular);

