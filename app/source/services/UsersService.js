angular.module('app').service('UsersService', ['$q', 'UsersModel', 'UsersResource', function($q, UsersModel, UsersResource) {
    'use strict';

    this.getUsers = function () {
        var deferred = $q.defer();

        UsersResource.getUsers(
            function (data) {
                deferred.resolve(data);
            }, function (error) {
                //mocked data assigned to a failed callback
                deferred.reject(UsersModel.users);
            }
        );
        return deferred.promise;
    };

}]);