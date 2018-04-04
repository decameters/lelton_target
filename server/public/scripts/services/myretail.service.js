app.service('MyRetailService', ['$http', function ($http) {
    var self = this;

    self.products = { list: [] };

    self.api = { list: [] };

    self.apidetails = { list: [] };

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

    self.getProductDetails = function (productId) {

        console.log('in getProductDetails');
        console.log('productId is ', productId);
        
        $http({
            method: 'GET',
            url: '/products/' + productId
        }).then(function (response) {
            console.log('response', response.data);
            if (response.data[0].id == productId){
            self.productdetail.list = response.data;
            } else {
                console.log('NOPE');
            }
        })
    }

    self.getApiProducts = function () {

        $http({
            method: 'GET',
            url: '/products/api'
        }).then(function (response) {
            console.log('response', response);
            self.api.list = response.data.product.item;
        })
    }

    // self.getApiProductDetails = function (productId) {

    //     console.log('in getApiProductDetails');
    //     console.log('API productId is ', productId);

    //     $http({
    //         method: 'GET',
    //         url: '/products/apidetails/' + productId
    //     }).then(function (response) {
    //         console.log('response', response);
    //         if (response.data[0].product.item.tcin == productId){
    //             self.apidetails.list = response.data.product.item;
    //         } else {
    //             console.log('no no no');
    //         }
    //     })
    // }
    

}]);
