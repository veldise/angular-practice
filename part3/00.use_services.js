!(function (angular) {
    'use strict';
    /**
    *
    */
    function MainCtrl($scope, $interval, $log, $http, $filter) {
        $scope.count = 0;
        // $timeout = setTimeout + $apply + try~catch
        // $interval = setInterval + $apply
        $interval(function () {
            $scope.count++;
            $scope.nowTime = (new Date()).getTime();
        }, 1000); // 1 sec
        /**
        *
        */
        var resourceUrl = 'http://192.168.0.165:3000/friends';

        $scope.getData = function () {
            $log.info('request data...');
            var stTime = (new Date()).getTime();

            $scope.resourceUrl = resourceUrl;
            $http.get(resourceUrl)
                .success(function (data) {
                    $log.info('recv data:', data.length);
                    $log.info('recv time:', (new Date()).getTime() - stTime, 'ms');
                    // [
                    //   { "name": "John", "age": 25, "gender": "boy" },
                    //   { "name": "Jessie", "age": 30, "gender": "girl" },
                    //   ...

                    // $scope.data = $filter('json')(data);
                    $scope.data = data;
                })
                .error(function (reason) {
                    alert(reason);
                });
        };
        /**
        *
        */
        $scope.sortAge = function () {
            var data = $scope.data;
            if (!data) {
                return;
            }

            $scope.data = $filter('orderBy')(data, '-age'); // desc
        };
    }
    MainCtrl.$inject = ['$scope', '$interval', '$log', '$http', '$filter'];
    /**
    *
    */
    angular.module('mainApp', [])
        .controller('MainCtrl', MainCtrl);
})(angular);
