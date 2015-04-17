(function (angular) {
    'use strict';
    /**
    *
    */
    function addItemText () {
        return function (num) {
            if (!angular.isNumber(num)) {
                return num;
            }

            var itemText = 'item';
            if (num > 1) {
                itemText += 's';
            }

            return num + ' ' + itemText;
        };
    }
    /**
    *
    */
    angular.module('todo.filters', [])
        .filter('addItemText', addItemText);
})(angular);
