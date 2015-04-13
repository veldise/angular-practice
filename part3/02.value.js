// - Value Service는 Constant Service와 유사하지만 최초 한번은 변경을 할 수 있다. Factory 서비스의 작은 동생뻘이다
// - Directive에서 사용하기 유용하다
// - Value를 가지고 계산할 수는 없다
!(function(angular) {
    'use strict';
    /**
     *
     */
    function MainCtrl($scope, fooConfig) {
        $scope.fooConfig = fooConfig;

        // 최초 한번의 변경이 가능
        angular.extend(fooConfig, {
            config3: "I have been extended"
        });
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
        .value('fooConfig', fooConfig)
        .controller('MainCtrl', MainCtrl);
})(angular);
