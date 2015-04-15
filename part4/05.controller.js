(function (angular) {
    'use strict';
    /**
     *
     */
    function MainCtrl($scope, $http) {
        $http.get('http://192.168.0.165:3000/friends')
            .success(function (data) {
                $scope.friends = data;
            })
            .error(function (reason) {
                alert(reason);
            });
    }
    MainCtrl.$inject = ['$scope', '$http'];
    /**
     *
     */
    function myDirective () {
        return {
            restrict: 'E',
            template: [
                '<div>',
                    '<input type="text" ng-model="name"/>',
                    '<input type="number" ng-model="age"/>',
                    '<select ng-model="gender">',
                        '<option value="boy">boy</option>',
                        '<option value="girl">girl</option>',
                    '</select>',
                    '<button type="button" ng-click="addItem()">Add</button>',
                '</div>',
                '<table>',
                    '<tr ng-repeat="item in list">',
                        '<td>name: {{item.name}}</td>',
                        '<td>age: {{item.age}}</td>',
                        '<td>gender: {{item.gender}}</td>',
                        '<td><button type="button"ng-click="remove(item)" > X </button></td>',
                    '</tr>',
                '</table>'
            ].join('\n'),
            scope: {
                list: '='
            },
            controller: function () {
                var _list = []; // private

                this.getList = function () {
                    return _list;
                };
                this.setList = function (list) {
                    _list = list;
                };

                this.push = function (item) {
                    _list.push(item);
                };
                this.remove = function (item) {
                    var index = _list.indexOf(item);
                    _list.splice(index, 1);
                };
            },
            link: function (scope, element, attrs, ctrl) {
                scope.gender = 'boy';

                scope.$watch('list', function (list) {
                    if (!list) {
                        return;
                    }
                    ctrl.setList(list);
                });

                scope.addItem = function () {
                    ctrl.push({
                        name: scope.name,
                        age: scope.age,
                        gender: scope.gender
                    });
                };
                scope.remove = function (item) {
                    ctrl.remove(item);
                };
            }
        };
    }
    /**
     *
     */
    angular.module('mainApp', [])
        .directive('myDirective', myDirective)
        .controller('MainCtrl', MainCtrl);
})(angular);

