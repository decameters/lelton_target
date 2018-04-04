var app = angular.module('MyRetailApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '/views/home.html',
        controller: 'MyRetailController as mc'
    }).when('/:id', {
        templateUrl: '/views/productdetail.html',
        controller: 'DetailsController as dc'
    }).otherwise({
        template: '<h1>404</h1>'
    });
});
