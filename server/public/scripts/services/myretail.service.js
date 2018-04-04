app.service('MyRetailService', ['$http', function ($http) {
    var self = this;

    self.products = { list: [] };

    // self.moviedetail = { list: [] };

    self.getProducts = function () {

        $http({
            method: 'GET',
            url: '/products'
        }).then(function (response) {
            console.log('response', response);
            self.products.list = response.data;
        })
    }

    

}]);
