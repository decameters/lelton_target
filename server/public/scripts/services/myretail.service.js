app.service('MyRetailService', ['$http', function ($http) {
    var self = this;

    self.products = { list: [] };

    self.productdetail = { list: [] };

    self.getProducts = function () {

        $http({
            method: 'GET',
            url: '/products'
        }).then(function (response) {
            console.log('response', response);
            self.products.list = response.data;
        })
    }

    self.getProductDetails = function (id) {

        console.log('in getProductDetails');
        console.log(id);
        
        $http({
            method: 'GET',
            url: '/products/' + id
        }).then(function (response) {
            console.log('response', response);
            self.productdetail.list = response.data;
        })
    }

    

}]);
