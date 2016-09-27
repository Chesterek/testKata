angular.module('app').controller('UsersController', ['$scope', '$rootScope', 'UsersService', 'UsersModel', function($scope, $rootScope, UsersService, UsersModel) {
    'use strict';

    $scope.init = function () {
        $rootScope.isLoading = true;

        UsersService.getUsers().then(
            function success (response) {
                console.log(response);
            }, function error (error) {
                //response comes back after browser's timeout.
                console.log('check expected mocked data retrieval', error);
            }
        ).finally(
            function () {
                $rootScope.isLoading = false;
            }
        );
    };

}]);