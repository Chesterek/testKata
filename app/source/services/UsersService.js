angular.module('app').service('UsersService', ['$q', 'UsersModel', 'UsersResource', function($q, UsersModel, UsersResource) {
    'use strict';

    var self = this;

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

    this.createNewUser = function (payload) {
        var deferred = $q.defer();

        UsersResource.createUser(null, payload,
            function (data) {
                deferred.resolve(data);
            }, function (error) {
                //server returns created object.
                payload.id = UsersModel.length + 1;
                UsersModel.users.push(payload);
                deferred.reject(error);
            }
        );
        return deferred.promise;
    };

    this.removeUser = function (id) {
        var deferred = $q.defer();

        UsersResource.removeUser({id: id},
            function (data) {
                deferred.resolve(data);
            }, function (error) {
                removeUserFromModel(id);
                deferred.reject(error);
            }
        );
        return deferred.promise;
    };

    function removeUserFromModel (id) {
        UsersModel.users = _.reject(UsersModel.users, function (user) {
            return user.id === id;
        });
    }

}]);