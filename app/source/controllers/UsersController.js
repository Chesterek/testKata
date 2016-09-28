angular.module('app').controller('UsersController', ['$scope', '$rootScope', '$modal', 'UsersService', 'UsersModel', function($scope, $rootScope, $modal, UsersService, UsersModel) {
    'use strict';

    $scope.flags = {
        isCrudLoading: false
    };

    $scope.init = function () {
        $rootScope.isLoading = true;

        UsersService.getUsers().then(
            function success (response) {
                console.log(response);
            }, function error (fetchedData) {
                //response comes back after browser's timeout.
                $scope.users = fetchedData;
            }
        ).finally(
            function () {
                $rootScope.isLoading = false;
            }
        );
    };

    $scope.openCreateNewUserModal = function (mode, user) {
        var modalScope = $scope.$new();
        modalScope.mode = mode;
        modalScope.user = angular.copy(user) || {};

        var modalInstance = $modal.open({
            templateUrl: 'source/views/modals/createUserModal.html',
            scope: modalScope,
            windowClass: ''
        });
        modalInstance.result.then(function (user) {
            if (mode === 'create') {
                createNewUser(user);
            } else if (mode === 'edit') {
                editUser(user);
            }
        });

    };

    function createNewUser (user) {
        $scope.flags.isCrudLoading = true;
        UsersService.createNewUser(user).then(
            function success (response) {
                console.log(response);
            }, function error (error) {
                $scope.users = UsersModel.users;
            }
        ).finally(
            function () {
                $scope.flags.isCrudLoading = false;
            }
        );
    }

    function editUser (user) {
        $scope.flags.isCrudLoading = true;
        UsersService.editUser(user).then(
            function success (response) {
                console.log(response);
            }, function error (error) {
                $scope.users = UsersModel.users;
            }
        ).finally(
            function () {
                $scope.flags.isCrudLoading = false;
            }
        );
    }

    $scope.openRemoveUserModal = function(user) {
        var modalScope = $scope.$new();
        modalScope.user = user;

        var modalInstance = $modal.open({
            templateUrl: 'source/views/modals/removeUserModal.html',
            scope: modalScope,
            windowClass: ''
        });
        modalInstance.result.then(function () {
            removeUser(user.id);
        });
    };

    function removeUser (id) {
        $scope.flags.isCrudLoading = true;
        UsersService.removeUser(id).then(
            function success (response) {
                console.log(response);
            }, function error (error) {
                $scope.users = UsersModel.users;
            }
        ).finally(
            function () {
                $scope.flags.isCrudLoading = false;
            }
        );
    }

}]);