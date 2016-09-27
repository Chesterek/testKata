angular.module('app').controller('UsersController', ['$scope', '$rootScope', 'UsersService', 'UsersModel', function($scope, $rootScope, UsersService, UsersModel) {
    'use strict';

    $scope.init = function () {
        $rootScope.isLoading = true;

        UsersService.getUsers().then(
            function success (response) {
                console.log(response);
            }, function error (fetchedData) {
                //response comes back after browser's timeout.
                console.log('check expected mocked data retrieval', fetchedData);
                $scope.users = fetchedData;
            }
        ).finally(
            function () {
                $rootScope.isLoading = false;
            }
        );
    };

    $scope.openCreateNewUserModal = function () {

    };

    $scope.createNewUser = function () {

    };

    $scope.editUser = function () {

    };

    $scope.openRemoveUserModal = function() {

    };

    $scope.removeUser = function () {

    };

}]);