app.controller('MyRetailController', ['MyRetailService', '$routeParams', function (MyRetailService, $routeParams) {
    var self = this;

    self.products = MyRetailService.products;
    self.api = MyRetailService.api;

    MyRetailService.getProducts();
    // MyRetailService.getProductDetails();

    // self.productdetail = MyRetailService.productdetail;
    // self.apidetails = MyRetailService.apidetails;    

    // self.productId = $routeParams.id
    // self.getProductDetails = MyRetailService.getProductDetails($routeParams.id);
    // console.log('route params in controller id ',$routeParams.id);

    MyRetailService.getApiProducts();
}])
