app.controller('MyRetailController', ['MyRetailService', '$routeParams', function (MyRetailService, $routeParams) {
    var self = this;

    self.products = MyRetailService.products;
    self.api = MyRetailService.api;
    self.productdetail = MyRetailService.productdetail;

    self.productId = $routeParams.id
    MyRetailService.getProductDetails($routeParams.id);
    console.log('id ',$routeParams.id);
    

    MyRetailService.getProducts();
    // MyRetailService.getProductDetails();
}])
