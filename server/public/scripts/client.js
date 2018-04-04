var app = angular.module('MyRetailApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '/views/home.html',
        controller: 'MyRetailController as vm'
    }).otherwise({
        template: '<h1>404</h1>'
    });
});
