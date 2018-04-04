app.controller('MyRetailController', ['MyRetailService', '$routeParams', function (MyRetailService, $routeParams) {
    var self = this;

    self.products = MyRetailService.products;
    self.api = MyRetailService.api;

    MyRetailService.getProducts();
    // MyRetailService.getProductDetails();
}])
