angular.module('app').service('GlobalSettings', function () {
    'use strict';

    var self = this;

    this.config = {
        SERVER_URL: 'http://10.100.100.100',
        API_VERSION: 'v1'
    };

    this.get = function (element) {
        return self.config[element];
    };

});