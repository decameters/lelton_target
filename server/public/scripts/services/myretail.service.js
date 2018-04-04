app.service('MyRetailService', ['$http', function ($http) {
    var self = this;

    self.products = { list: [] };

    self.api = { list: [] };

    self.productdetail = { list: [] };

    // GET REQUEST FOR ALL PRODUCTS IN DATABASE
    self.getProducts = function () {

        $http({
            method: 'GET',
            url: '/products'
        }).then(function (response) {
            // console.log('response', response);
            self.products.list = response.data;
        })
    } // END GET REQUEST FOR ALL PRODUCTS IN DATABASE


    // GET REQUEST FOR ALL PRODUCT DETAILS BY ID IN DATABASE
    self.getProductDetails = function (productId) {
        
        $http({
            method: 'GET',
            url: '/products/' + productId
        }).then(function (response) {
            // console.log('response', response.data);
            if (response.data[0].id == productId){
            self.productdetail.list = response.data;
            } else {
                console.log('error in getProductDetails by id');
            }
        })
    } // END GET REQUEST FOR ALL PRODUCT DETAILS BY ID IN DATABASE


    // GET REQUEST FOR API PRODUCTS
    self.getApiProducts = function () {

        $http({
            method: 'GET',
            url: '/products/api'
        }).then(function (response) {
            // console.log('response', response);
            self.api.list = response.data.product.item;
        })
    } // END GET REQUEST FOR API PRODUCTS

}]);
