var app = angular.module('MyRetailApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '/views/home.html',
        controller: 'HomeController as vm'
    }).otherwise({
        template: '<h1>404</h1>'
    });
});
