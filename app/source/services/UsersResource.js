angular.module('app').service('UsersResource', [ '$resource', 'GlobalSettings', function($resource, GlobalSettings) {
    'use strict';
    var serverUrl = GlobalSettings.get('SERVER_URL');
    var APIVersion = GlobalSettings.get('API_VERSION');

    return $resource(serverUrl + '/' + APIVersion + '/users/:id',
        {
            id: '@id'
        },
        {
            getUsers: {
                method: 'GET'
            },
            createUser: {
                method: 'POST'
            },
            updateUser: {
                method: 'PUT'
            },
            removeUser: {
                method: 'DELETE'
            }
        });
}]);


/*
* REST API DOCUMENTATION:
*
*  [GET]    url/v1/users          - get list of all users
*  [POST]   url/v1/users          - create a new user
*  [PUT]    url/v1/users/:id      - edit an already existing user
*  [DELETE] url/v1/users/:id      - remove an already existing user
*
* */