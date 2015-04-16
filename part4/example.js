(function (angular) {
    'use strict';
    /**
     *
     */
    function MainCtrl($scope, $http) {
        /**
        *   init
        */
        var domain = 'http://localhost:3000';

        $http.get(domain + '/us500')
            .success(function (data) {
                $scope.peoples = data;
            })
            .error(function (reason) {
                alert(reason);
            });
        /**
        *
        */
        $scope.callPhone = function (phone) {
            alert('call: ' + phone);
        };
    }
    MainCtrl.$inject = ['$scope', '$http'];
    /**
     *
     */
    function phoneItem() {
        var template = [
            '<div class="phone-item">',
                '<span>Name: <a href="#">{{}}</a></span>', // company_name
                '<span>Phone: <a href="#">{{}}</a></span>', // phone1
                '<button type="button" ng-click="">Modify</button>',
                '<button type="button" ng-click="dial({})">Call</button>', // phone 1
            '</div>',
        ].join('\n');

        // var controller = function () {
        // };

        var link = function (scope, element, attrs/*, ctrl*/) {
            // var newPhoneNum = prompt('input new phone number:');
        };

        return {
            restrict: 'E',
            replace: true,
            scope: { // isolated
            },
            template: template,
            // controller: controller,
            link: link
        };
    }
    /**
     *
     */
    angular.module('mainApp', [])
        .directive('phoneItem', phoneItem)
        .controller('MainCtrl', MainCtrl);
})(angular);
