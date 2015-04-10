!(function (angular) {
    /**
    *
    */
    function TodoCtrl($scope) {
        $scope.todos = [];
    }
    TodoCtrl.$inject = ['$scope'];
    /**
    *
    */
    angular.module('todoApp', [])
        .controller('TodoCtrl', TodoCtrl);
})(angular);
