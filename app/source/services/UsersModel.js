angular.module('app').service('UsersModel', [function() {
    'use strict';

    var self = this;

    this.users = [
        {
            name: 'Neddard Stark',
            email: 'ned@stark.got'
        },
        {
            name: 'Arya Stark',
            email: 'arya@Stark.got'
        },
        {
            name: 'Stannis Lannister',
            email: 'stannis@lannister.got'
        }
    ]

}]);