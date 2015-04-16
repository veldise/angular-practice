(function (angular) {
    'use strict';
    /**
     *
     */
    function MainCtrl($scope, $http) {
        /**
        *   init
        */
        var domain = 'http://192.168.0.165:3000';

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
                '<span>Name: <a href="#">{{people.company_name}}</a></span>', // company_name
                '<span>Phone: <a href="#">{{people.phone1}}</a></span>', // phone1
                '<button type="button" ng-click="modify(people)" >Modify</button>',
                '<button type="button" ng-click="dial({ phone: people.phone1 })" >Call</button>',
            '</div>',
        ].join('\n');

        // var controller = function () {
        // };

        var link = function (scope, element, attrs/*, ctrl*/) {
            scope.modify = function (people) {
                people.phone1 = prompt('input new phone number:');
            };
        };

        return {
            restrict: 'E',
            replace: true,
            scope: { // isolated
                people: '=model',
                dial: '&'
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
