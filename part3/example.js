// 1. $http.get을 사용하여 데이터 불러오기
// 2. ng-repeat를 사용하여 View 에 데이터를 출력
// 3. name으로  asc 정렬
// 4. ‘filter’ filter를 사용하여 gender: ‘girl’인 것들만 출력
// 5. age가 25 이상인 것들에 대해 color: red 설정
(function (angular) {
    function MainCtrl($scope, $http) {
        /**
        *   init (load data)
        */
        $http.get('http://192.168.0.165:3000/friends')
            .success(function (data) {
                $scope.friends = data;
            });
        /**
        *   init (variables)
        */
        $scope.search = 'girl';
    }
    /**
    *
    */
    angular.module('mainApp', [])
        .controller('MainCtrl', MainCtrl);
})(angular);
