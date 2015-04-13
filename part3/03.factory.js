// - 가장 일반적으로 사용하는 서비스 종류이다
// - 팩토리는 어떤 형태의 데이터타입이라도 리턴할 수 있다. 리턴된 오브젝트를 가지고 작업을 한다
// - 단, 리턴된 오브젝트의 값을 변경하면 해당 팩토리의 인스턴스를 사용하는 모든 곳에 변경값이 반영된다
// - Revealing Module Pattern 식으로 작성을 한다
!(function(angular) {
    'use strict';
    /**
     *
     */
    function MainCtrl($scope, foo) {
        $scope.foo = foo; // returned object
    }
    MainCtrl.$inject = ['$scope', 'foo'];

    function MainCtrl2 ($scope, foo) {
        foo.variable = 'This is changed value.';
        $scope.foo = foo;
    }
    MainCtrl2.$inject = ['$scope', 'foo'];
    /**
     *
     */
    function foo() {
        var thisIsPrivate = 'Private';
        function getPrivate() {
            return thisIsPrivate;
        }
        return {
            variable: 'This is public',
            getPrivate: getPrivate
        };
    }
    /**
     *
     */
    angular.module('mainApp', [])
        .factory('foo', foo)
        .controller('MainCtrl', MainCtrl)
        .controller('MainCtrl2', MainCtrl2);
})(angular);
