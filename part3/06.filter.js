!(function (angular) {
    'use strict';
    /**
     *
     */
    function MainCtrl($scope) {
        $scope.tooLongStr = [
            'Now that we\'re a little more familiar with the module pattern, let’s take a look at a slightly improved version - Christian Heilmann’s Revealing Module pattern.',

            'The Revealing Module pattern came about as Heilmann was frustrated with the fact that he had to repeat the name of the main object when we wanted to call one public method from another or access public variables.  He also disliked the Module pattern’s requirement for having to switch to object literal notation for the things he wished to make public.',

            'The result of his efforts was an updated pattern where we would simply define all of our functions and variables in the private scope and return an anonymous object with pointers to the private functionality we wished to reveal as public.'
        ].join('\n');
    }
    MainCtrl.$inject = ['$scope'];
    /**
     *
     */
    function truncate() {
        var endStr = '.....';

        return function (text, length) {
            if (!text) {
                return '';
            }

            text = text+'';
            if (isNaN(length)) {
                length = 10;
            }

            if (text.length <= length) {
                return text;
            }
            else {
                var sliceLen = length - endStr.length;
                if (sliceLen <= 0) {
                    return endStr;
                }
                else {
                    return (text + '').slice(0, sliceLen) + endStr;
                }
            }
        };
    }
    /**
     *
     */
    angular.module('mainApp', [])
        .filter('truncate', truncate)
        .controller('MainCtrl', MainCtrl);
})(angular);
