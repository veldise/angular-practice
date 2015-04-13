// - 공통으로 사용하는 환경값을 지정할 때 상수를 지정한다
// - 사용자 정의 Directive에서 환경값을 가져다 쓰고 싶을 때 유용하다
!(function (angular) {
    'use strict';
    /**
    *
    */
    function MainCtrl($scope, fooConfig) {
        $scope.fooConfig = fooConfig;
    }
    MainCtrl.$inject = ['$scope', 'fooConfig'];
    /**
    *
    */
    var fooConfig = {
        config1: true,
        config2: 'Default config2'
    };
    /**
    *
    */
    angular.module('mainApp', [])
        .constant('fooConfig', fooConfig)
        .controller('MainCtrl', MainCtrl);
})(angular);
