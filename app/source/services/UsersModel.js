angular.module('app').service('UsersModel', [function() {
    'use strict';

    var self = this;

    this.users = [
        {
            id: 1,
            name: 'Neddard Stark',
            email: 'ned@stark.got'
        },
        {
            id: 2,
            name: 'Arya Stark',
            email: 'arya@Stark.got'
        },
        {
            id: 3,
            name: 'Stannis Lannister',
            email: 'stannis@lannister.got'
        }
    ]

}]);