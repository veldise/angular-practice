(function (angular) {
    'use strict';
    /**
     *
     */
    function MainCtrl($scope, $http) {
        $scope.count = 0;
        $scope.addCount = function () {
            $scope.count++;
        };

        $scope.reqUrl = 'http://192.168.0.165:3000/friends';
        $scope.loadData = function () {
            $http.get($scope.reqUrl)
                .success(function (data) {
                    $scope.data = data;
                })
                .error(function (reason) {
                    alert(reason);
                });
        };
    }
    MainCtrl.$inject = ['$scope', '$http'];
    /**
     *
     */
    function onEnter () {
        return function (scope, element, attrs) {
            // element.bind('keydown keypress', function (event) {
            element.bind('keyup', function (event) {
                if (event.which === 13) {
                    scope.$apply(function () {
                        scope.$eval(attrs.onEnter);
                    });

                    event.preventDefault();
                }
            });
        };
    }
    /**
     *
     */
    angular.module('mainApp', [])
        .directive('onEnter', onEnter)
        .controller('MainCtrl', MainCtrl);
})(angular);

