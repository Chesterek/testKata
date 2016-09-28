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
                assignUserId(payload);
                UsersModel.users.push(payload);
                deferred.reject(error);
            }
        );
        return deferred.promise;
    };

    this.editUser = function (payload) {
        var deferred = $q.defer();

        UsersResource.editUser({id: payload.id}, payload,
            function (data) {
                deferred.resolve(data);
            }, function (error) {
                //server returns updated object. Id does not change. Name and Email do.
                //In real life situation, data would come from server; therefore, payload would not be passed to the callback.
                updateUserInModel(payload);
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

    function assignUserId (user) {
        //For the sake of simplicity, user will have first available id assigned (even if it was assigned to the user that had been already removed.
        var ids = _.pluck(UsersModel.users, 'id');
        var id = 0;
        do {
            id++;
            user.id = id;
        } while (_.contains(ids, id));
    }

    function updateUserInModel (user) {
        _.each(UsersModel.users, function (item, index) {
            if (item.id === user.id) {
                UsersModel.users[index] = user;
            }
        });
    }

    function removeUserFromModel (id) {
        UsersModel.users = _.reject(UsersModel.users, function (user) {
            return user.id === id;
        });
    }

}]);