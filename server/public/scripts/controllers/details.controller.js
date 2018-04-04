app.controller('DetailsController', ['MyRetailService', '$routeParams', function (MyRetailService, $routeParams) {
    var self = this;

    self.productdetail = MyRetailService.productdetail;
    self.apidetails = MyRetailService.apidetails;    

    self.productId = $routeParams.id
    self.getProductDetails = MyRetailService.getProductDetails($routeParams.id);
    console.log('route params in controller id ',$routeParams.id);

    // self.getApiProductDetails = MyRetailService.getApiProductDetails($routeParams.id);

}])


