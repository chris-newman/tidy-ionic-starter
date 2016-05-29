//routes for your application - default app name is 'starter'
angular.module('starter').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'app/components/login/login.view.html',
            controller: 'LoginController'
        })
        //add another route / state
        /*
        .state('home', {
            url: '/home',
            templateUrl: 'app/components/home/home.view.html',
            controller: 'HomeController'
        })        
        */
    ;
    $urlRouterProvider.otherwise('/login');
});