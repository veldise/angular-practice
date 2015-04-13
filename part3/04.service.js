// - 'service' service는 Factory service와 유사하지만 생성자명칭(== 서비스명칭)을 넘기면 자동으로 new를 통하여 생성된다
//   즉, Factory 처럼 오브젝트의 리턴이 필요없다
// - 하기 예는 완전히 동일하다. 주의 할 것은 factory안에서 또는 service사용시 new을 여러번 하여도 반드시 한번만 인스턴스화 한다
//   즉, Singleton 패턴으로 객체 하나만이 생성된다
!(function (angular) {
    'use strict';
    /**
     *
     */
    function MainCtrl($scope, foo) {
        $scope.foo = foo; // new Foo();
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
    function Foo() {
        var thisIsPrivate = 'Private';
        this.variable = 'This is public';
        this.getPrivate = function () {
            return thisIsPrivate;
        };
    }
    Foo.prototype.toJSON = function() {
        return { variable: this.variable };
    };
    /**
     *
     */
    angular.module('mainApp', [])
        .service('foo', Foo)
        .controller('MainCtrl', MainCtrl)
        .controller('MainCtrl2', MainCtrl2);
})(angular);
