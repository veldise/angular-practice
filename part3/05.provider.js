// - Provider는 factory의 큰형님 뻘이다
// - $get fuction을 가지고 있어야 한다. 만일 Provider 명칭이 foo이고 controller에 inject될 때 실제는 $get function의 결과값이 inject되는 것이다. 왜 factory로 사용하면 간편한데 굳이 이렇게 할까?
// - 이유인즉슨, config function을 통해서 provide에 대한 환경설정을 할 수 있기 때문이다
// - 예를 보자
//   1) thisIsPrivate 변수가 $get 펑션 밖에 위치한다
//   2) 따라서 setPrivate 메소드를 통하여 thisIsPrivate 변수값을 변경할 수 있다
//   3) 이런게 하는 이유는 우리가 필요로 하는 다양한 환경값을 바꾸어서 환경설정을 하고 싶기 때문이다
//   4) Provider명칭이 'foo' 이므로 app.config 에서 'fooProvider' 명을 준다
!(function (angular) {
    'use strict';
    /**
     *
     */
    function MainCtrl($scope, foo) {
        $scope.foo = foo;
    }
    MainCtrl.$inject = ['$scope', 'foo'];
    /**
     *
     */
    function foo() {
        var thisIsPrivate = 'Private';

        return {
            setPrivate: function (newVal) {
                thisIsPrivate = newVal;
            },
            $get: function () {
                function getPrivate() {
                    return thisIsPrivate;
                }

                return {
                    variable: 'This is public',
                    getPrivate: getPrivate
                };
            }
        };
    }
    /**
    *
    */
    function mainConfig(fooProvider) {
        fooProvider.setPrivate('New value from config');
    }
    mainConfig.$inject = ['fooProvider'];
    /**
     *
     */
    angular.module('mainApp', [])
        .provider('foo', foo)
        .config(mainConfig)
        .controller('MainCtrl', MainCtrl);
})(angular);
