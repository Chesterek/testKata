'use strict';
angular.module('app', [
    'ui.bootstrap',
    'ngResource',
    'ngAnimate',
    'ui.router'
])
.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/userList');

    $stateProvider
        .state('userList', {
            url: '/userList',
            views: {
                'main': {
                    templateUrl: 'source/views/userList.html',
                    controller: 'UsersController'
                }
            }
        });
})
.run(function ($rootScope, $window, $state) {
    $rootScope.$state = $state;

});
